"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    async function resize() {
        try {
            await (0, sharp_1.default)(`../static/images/input/${req.query.name}`)
                .resize(300)
                .jpeg()
                .toFile(`../../static/images/input/${req.query.name}.jpeg`);
            res.send("completed");
        }
        catch (error) {
            console.log(error);
        }
    }
    resize();
});
exports.default = router;
