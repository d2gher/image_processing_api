import express from "express";
import path from "path";
import fs from "fs";
import { widthHeightCheck } from "../utils/helpers";
import resize from "../utils/resizeUtils";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  // Checks if the user wrote the required params
  if (!req.query.name) {
    res.send(
      `For Resize you should provide the name of the image, width and height are optional. 
      Example: Resize: "/resize?name='filename'&width='optional'&height='optional'"`
    );
    return;
  }

  const { width, height } = widthHeightCheck(req, res);

  // Searches if the image exist on our server
  const ImagePath = `./public/images/input/${req.query.name}.jpg`;
  fs.access(ImagePath, (err) => {
    if (err) {
      console.log(err);
      res.send("File couldn't be found");
      return;
    }
    // Searches if the images alreay been resized
    const thumbnailPath = `./public/images/output/${
      req.query.name + "_" + width + "_" + height
    }.jpg`;
    fs.access(thumbnailPath, async (err) => {
      // If the image hasn't been processed, then process it
      if (err) {
        await resize(req.query.name as string, width, height);
      }
      // Load the image
      res.sendFile(
        path.join(
          __dirname,
          "../../public/images/output",
          `${req.query.name + "_" + width + "_" + height}.jpg`
        )
      );
    });
  });
});

export default router;
