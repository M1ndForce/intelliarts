const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const snackRouts = require("./routs/snacks");
const port = 3000;

mongoose
  .connect("mongodb://localhost/snacks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB! all right!!!!"))
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", snackRouts);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
