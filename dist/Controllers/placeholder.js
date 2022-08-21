"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    if (!req.query.width || !req.query.height) {
        res.send(`use this right`);
        return;
    }
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (isNaN(width) || isNaN(height)) {
        res.send(`use this right`);
        return;
    }
    (async function () {
        try {
            const image = await (0, sharp_1.default)({
                create: {
                    width: width,
                    height: height,
                    channels: 4,
                    background: { r: 250, g: 0, b: 0 },
                },
            })
                .png()
                .toBuffer();
            res.write(image);
            res.end();
        }
        catch (error) {
            console.error(error);
        }
    })();
});
exports.default = router;
