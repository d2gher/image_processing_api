import express from "express";
import sharp from "sharp";
import fs from "fs";


const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  async function resize() {
    try {
      await sharp(`../static/images/input/${req.query.name}`)
        .resize(300)
        .jpeg()
        .toFile(`../../static/images/input/${req.query.name}.jpeg`);
      res.send("completed");
    } catch (error) {
      console.log(error);
    }
  }
  resize();
});

export default router;
