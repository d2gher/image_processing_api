"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const placeholder_1 = __importDefault(require("./controllers/placeholder"));
const resize_1 = __importDefault(require("./controllers/resize"));
app.get("/", (_req, res) => {
    res.status(200).send(`Correct use of the API:
  Placeholder: "/placeholder?width='the width you want'&height='the height you want'" 
  Returns a placeholder image with the width and height specified.
  Resize: "/resize?name='filename'&width='optional'&height='optional'". 
  It resizes the image to the width and height provieded, 300 by defualt.`);
});
app.use("/placeholder", placeholder_1.default);
app.use("/resize", resize_1.default);
app.get("*", (_req, res) => {
    res.send("Page not found");
});
app.listen(port, () => {
    console.log(`App is working at localhost:${port}`);
});
exports.default = app;
