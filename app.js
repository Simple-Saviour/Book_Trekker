const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes.js");
const app = express();

//middlewares

app.use(express.json());
app.use("/books" , router);

mongoose.connect(
    "mongodb+srv://admin:AtyMGAPZ2SzVLbFf@cluster0.sxvfq.mongodb.net/book_trekker?retryWrites=true&w=majority"
    ).then(() => console.log("Connected to Database")).then(() =>{
        app.listen(5000);
    })
    .catch((err) => console.log(err));