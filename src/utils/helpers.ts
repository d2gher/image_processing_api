import { Request, Response } from "express";

// Checks if the width and height are porvided in the query
function widthHeightCheck(req: Request, res: Response) {
  let width = parseInt(req.query.width as string);
  let height = parseInt(req.query.height as string);

  if (isNaN(width) || isNaN(height)) {
    if (!req.query.width || !req.query.height) {
      width = 300;
      height = 300;
    } else {
      res.send(
        "If you want a specific width and height, then you should add it to the query in number\n for exapmle: width=1080&height=720"
      );
    }
  }
  return { width, height };
}

export { widthHeightCheck };
