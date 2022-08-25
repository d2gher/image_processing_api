"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
async function placeholder(res, width, height) {
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
}
exports.default = placeholder;
