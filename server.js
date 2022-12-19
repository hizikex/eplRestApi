import express from "express";
import './dbConfig/eplDb.js'
import { eplRouter } from "./eplRoute/eplRoute.js";

//create a port
const PORT = 2224;

//create an app instance
const app = express();

app.use(express.json());
app.use('/api/v1', eplRouter)

app.listen(PORT, ()=>{
    console.log("App listening to PORT: " + PORT + " Successfully")
})