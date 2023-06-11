import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("crawling race result Server");
});
app.use("/api", routes);

app.use(
  async (error: Error, req: Request, res: Response, next: NextFunction) => {
    const { message } = error;
    return res.sendStatus(500000).send(message);
  }
);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
