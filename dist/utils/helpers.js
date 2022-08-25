"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.widthHeightCheck = void 0;
// Checks if the width and height are porvided in the query
function widthHeightCheck(req, res) {
  let width = parseInt(req.query.width);
  let height = parseInt(req.query.height);
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
exports.widthHeightCheck = widthHeightCheck;
