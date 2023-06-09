import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("crawling race result Server");
});
app.use("/api", routes);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
