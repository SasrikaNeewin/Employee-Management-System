const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.set('strictQuery',true);
mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", function (){
    console.log("Mongodb Connection success!");
})

const employeeRouter = require("./routes/employees.js");

app.use("/employee",employeeRouter);

const salaryRouter = require("./routes/salary.js");
app.use("/salary",salaryRouter);

app.listen(PORT,() => {
    console.log(`Server is up and running on port number: ${PORT}`)
})