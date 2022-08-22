import express from "express";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  // Checks if the user wrote the required params
  if (!req.query.name) {
    res.send(`use this right`);
    return;
  }
  // Searches if the image exist on our server
  const ImagePath = `./public/images/input/${req.query.name}.jpg`;
  fs.access(ImagePath, (err) => {
    if (err) {
      console.log(err);
      res.send("File couldn't be found");
      return;
    }
    // Searches if the images alreay been resized
    const thumbnailPath = `./public/images/output/${req.query.name}.jpeg`;
    fs.access(thumbnailPath, async (err) => {
      // If the image hasn't been processed, then process it
      if (err) {
        await resize(req);
      }
      // Load the image
      res.sendFile(
        path.join(
          __dirname,
          "../../public/images/output",
          `${req.query.name}.jpeg`
        )
      );
    });
  });
});

async function resize(req: express.Request) {
  try {
    await sharp(`./public/images/input/${req.query.name}.jpg`)
      .resize(300)
      .jpeg()
      .toFile(`./public/images/output/${req.query.name}.jpeg`);
  } catch (error) {
    console.log(error);
  }
}
export default router;
