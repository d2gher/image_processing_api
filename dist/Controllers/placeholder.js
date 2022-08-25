"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helpers_1 = require("../utils/helpers");
const placeholderUtils_1 = __importDefault(require("../utils/placeholderUtils"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    if (!req.query.width || !req.query.height) {
        res.send(`For placeholder you should provide the width and height you want. 
      Example: "/placeholder?width='the width you want'&height='the height you want'"`);
        return;
    }
    else {
        const { width, height } = (0, helpers_1.widthHeightCheck)(req, res);
        (0, placeholderUtils_1.default)(res, width, height);
    }
});
exports.default = router;
