//jshint esversion: 6
import express from "express";
import bodyParser from "body-parser";
import config from "./configs/db.config.js"
import dotenv from "dotenv"
dotenv.config();
import db from "./models/index.js";
import cors from "cors"

const app=express();

app.use(bodyParser.json());
app.use(cors());


db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced");
})

import authRoutes from "./routes/auth.route.js"
authRoutes(app);

import categoryRoutes from "./routes/category.route.js"
categoryRoutes(app);

import prodRoutes from "./routes/product.route.js";
prodRoutes(app)

import orderRoutes from "./routes/order.route.js";
orderRoutes(app);


app.listen(process.env.PORT,()=>{
    console.log(`Application is running on port ${process.env.PORT}`);
})