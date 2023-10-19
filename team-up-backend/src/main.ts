import express from "express";
import cors from 'cors';
import connectToMongoDB from "./utils/db";
require('dotenv').config()

const app: express.Application = express();
'use client';
const isDevMode = (process.env.NODE_ENV === 'development');
console.log(`Starting server in ${isDevMode ? 'dev' : 'prod'} mode 🚀🚀`)

app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const port = process.env.PORT || 4000;

app.listen(port, async() => {
    await connectToMongoDB();
    console.log(`Server sarted running on port ${port}`)
});