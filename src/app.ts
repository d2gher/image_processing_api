import express from "express";

const app = express();
const port = 3000;

import placeholderRoute from "./controllers/placeholder";
import resizeRoute from "./controllers/resize";

app.get("/", (_req: express.Request, res: express.Response) => {
  res.status(200).send(`Correct use of the API:
  Placeholder: "/placeholder?width='the width you want'&height='the height you want'" 
  Returns a placeholder image with the width and height specified.
  Resize: "/resize?name='filename'&width='optional'&height='optional'". 
  It resizes the image to the width and height provieded, 300 by defualt.`);
});

app.use("/placeholder", placeholderRoute);
app.use("/resize", resizeRoute);
app.get("*", (_req: express.Request, res: express.Response) => {
  res.send("Page not found");
});

app.listen(port, () => {
  console.log(`App is working at localhost:${port}`);
});

export default app;
