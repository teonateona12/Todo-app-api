import express from "express";
import connection from "./mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/todoItems.js";

const app = express();
app.use(cors());
dotenv.config();
connection();
app.use(express.json());
app.use("/", router);

app.listen(3001);
