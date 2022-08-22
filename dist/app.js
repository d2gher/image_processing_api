"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const placeholder_1 = __importDefault(require("./Controllers/placeholder"));
const resize_1 = __importDefault(require("./Controllers/resize"));
app.listen(port, () => {
  console.log(`App is working at local host: ${port}`);
});
app.get("/", (_req, res) => {
  res.send(`App is working at localhost:${port}`);
});
app.use("/placeholder", placeholder_1.default);
app.use("/resize", resize_1.default);
