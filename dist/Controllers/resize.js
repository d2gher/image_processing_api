"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const helpers_1 = require("../utils/helpers");
const router = express_1.default.Router();
router.get("/", (req, res) => {
  // Checks if the user wrote the required params
  if (!req.query.name) {
    res.send(`For Resize you should provide the name of the image, width and height are optional. 
      Example: Resize: "/resize?name='filename'&width='optional'&height='optional'"`);
    return;
  }
  const { width, height } = (0, helpers_1.widthHeightCheck)(req, res);
  // Searches if the image exist on our server
  const ImagePath = `./public/images/input/${req.query.name}.jpg`;
  fs_1.default.access(ImagePath, (err) => {
    if (err) {
      console.log(err);
      res.send("File couldn't be found");
      return;
    }
    // Searches if the images alreay been resized
    const thumbnailPath = `./public/images/output/${
      req.query.name + "_" + width + "_" + height
    }.jpg`;
    fs_1.default.access(thumbnailPath, async (err) => {
      // If the image hasn't been processed, then process it
      if (err) {
        await resize(req, res, width, height);
      }
      // Load the image
      res.sendFile(
        path_1.default.join(
          __dirname,
          "../../public/images/output",
          `${req.query.name + "_" + width + "_" + height}.jpg`
        )
      );
    });
  });
});
async function resize(req, res, width, height) {
  try {
    await (0, sharp_1.default)(`./public/images/input/${req.query.name}.jpg`)
      .resize(width, height)
      .toFormat("jpg")
      .toFile(
        `./public/images/output/${
          req.query.name + "_" + width + "_" + height
        }.jpg`
      );
  } catch (error) {
    console.log(error);
    res.send("Prossing Faild");
    res.end();
  }
}
exports.default = router;
