import express from "express";
import { widthHeightCheck } from "../utils/helpers";
import placeholder from "../utils/placeholderUtils";

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

    placeholder(res, width, height);
  }
});

export default router;
