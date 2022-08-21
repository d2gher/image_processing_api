import express from "express";
import sharp from "sharp";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  if (!req.query.width || !req.query.height) {
    res.send(`use this right`);
    return;
  }

  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (isNaN(width) || isNaN(height)) {
    res.send(`use this right`);
    return;
  }

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
        .png()
        .toBuffer();
      res.write(image);
      res.end();
    } catch (error) {
      console.error(error);
    }
  })();
});

export default router;
