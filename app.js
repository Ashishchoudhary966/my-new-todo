require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');

const app = express();

// connection to mongodb
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

// server configuration.....
app.listen(process.env.PORT || 3000, () => console.log("Server started listening on port:",process.env.PORT || 3000));
