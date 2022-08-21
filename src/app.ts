import express from "express";

const app = express();
const port = 3000;

import placeholderRoute from "./Controllers/placeholder";
import resizeRoute from "./Controllers/resize";
app.listen(port, () => {
  console.log(`App is working at local host: ${port}`);
});

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send(`App is working at localhost:${port}`);
});

app.use("/placeholder", placeholderRoute);
app.use("/resize", resizeRoute);
