const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const apiRoutes = require("./routes/api.js");

const PORT = process.env.PORT || 3021;

const app = express();

app.use(logger("dev"));

app.use(compression()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//const mongoUri = process.env.MONGODB_URI || "mongodb+srv://Dhanya:Ahalyamol14*@offline.2to7l.mongodb.net/budget?retryWrites=true&w=majority",
//mongoose.connect(mongoUri, {
  //useNewUrlParser: true,
  //useFindAndModify: false,
  //useUnifiedTopology: true
//});
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Dhanya:Ahalyamol14*@offline.2to7l.mongodb.net/budget?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useFindAndModify: false });


app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
