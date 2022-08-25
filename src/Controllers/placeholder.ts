import express from "express";
import sharp from "sharp";
import { widthHeightCheck } from "../utils/helpers";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  if (!req.query.width || !req.query.height) {
    res.send(
      `For placeholder you should provide the width and height you want. 
      Example: "/placeholder?width='the width you want'&height='the height you want'"`
    );
    return;
  } else {
    const { width, height } = widthHeightCheck(req, res);

    (async function () {
      try {
        const image = await sharp({
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
      } catch (error) {
        console.error(error);
      }
    })();
  }
});

export default router;
