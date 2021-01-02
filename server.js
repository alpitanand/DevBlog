const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/index");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());


app.use("/api", routes);

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error(err);
    console.log("MONGODB connected successfully");
  }
);

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
