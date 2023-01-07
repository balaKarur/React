console.log("This is server");
const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandeler} = require("./middleware/errorMiddleware");
const port = process.env.port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/goals",require("./routes/goalRoutes"));
app.use(errorHandeler);
/*app.get("/api/goals",(req,res) => {
    //res.send({"name":"Teach react16","duration":"1month"});
    res.status(201).json({"name":"Teach react16","duration":"1month"})
})*/
app.listen(port,() => {
    console.log(`Server started on ${port}`);
})