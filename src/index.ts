import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { EmailConfig } from "./config/EmailConfig";
import MongoClient from "./config/MongoConfig";
import dotenv from "dotenv";
import { userAuthRoutes } from "./routehandlers/userAuthRoutes";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/healthCheck", (req: Request, res: Response) => {
  res.send("Server is Up and Running");
});

app.use("/auth", userAuthRoutes);

/**
 * Global Error Handler for complete app.
 * If any of the routes failed to handle error the control will be trnasfered to this middleware.
 */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.status(500).json({ message: "Internal Server Error" });
});

// Initializations..
EmailConfig.initialize();
MongoClient.initialize()
  .then(() => {
    app.listen(3000, () => console.log("App is listening on port " + port));
  })
  .catch((error) => {
    console.error("Faile to start Server", error);
  });
