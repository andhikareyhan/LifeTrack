import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import loginRouter from "./sensors/login.js";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false, limit: "4mb" }));

app.use(router);
app.use(loginRouter);

// Route handler for root endpoint
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// port in use: 3001
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
