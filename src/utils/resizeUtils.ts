import express from "express";
import sharp from "sharp";

async function resize(filename: string, width: number, height: number) {
  try {
    await sharp(`./public/images/input/${filename}.jpg`)
      .resize(width, height)
      .toFormat("jpg")
      .toFile(
        `./public/images/output/${filename + "_" + width + "_" + height}.jpg`
      );
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default resize;
