import bodyParser from "body-parser";
import express from "express";
import productRoutes from "./routes/productRoutes";

const app = express();
app.use(bodyParser.json());

app.use("/api", productRoutes);

export default app;
