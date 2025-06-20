import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/', urlRoutes);

app.get("/", (req, res) =>
    res.send("<h1>Working</h1>")
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})