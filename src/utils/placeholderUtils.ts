import { Response } from "express";
import sharp from "sharp";

async function placeholder(res: Response, width: number, height: number) {
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
}

export default placeholder;
