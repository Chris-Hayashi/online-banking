const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const users = require("../routes/users");

const PORT = process.env.PORT || 3001;
const app = express();

//routes
// const apiRoutes = require("../routes/apiRoutes");
// const htmlRoutes = require("../routes/htmlRoutes");
app.use(users);

// Define middleware here
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '/client/build/index.html'));
    });
}

// Connect to Mongoose
const mongoURI = "mongodb://localhost:27017/HeroBanking";

mongoose
  .connect(
    process.env.MONGODB_URI||
    mongoURI,
    { useNewUrlParser: true }
  )
  .catch(err => console.log(err))


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})