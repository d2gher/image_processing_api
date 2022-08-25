"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const helpers_1 = require("../utils/helpers");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    if (!req.query.width || !req.query.height) {
        res.send(`For placeholder you should provide the width and height you want. 
      Example: "/placeholder?width='the width you want'&height='the height you want'"`);
        return;
    }
    else {
        const { width, height } = (0, helpers_1.widthHeightCheck)(req, res);
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
                    .toFormat("jpg")
                    .toBuffer();
                res.write(image);
                res.end();
            }
            catch (error) {
                console.error(error);
            }
        })();
    }
});
exports.default = router;
