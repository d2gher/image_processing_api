"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
async function resize(filename, width, height) {
    try {
        await (0, sharp_1.default)(`./public/images/input/${filename}.jpg`)
            .resize(width, height)
            .toFormat("jpg")
            .toFile(`./public/images/output/${filename + "_" + width + "_" + height}.jpg`);
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.default = resize;
