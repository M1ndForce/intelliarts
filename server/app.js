const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const snackRouts = require("./routs/snacks");
const config = require("./config/config");
const text = require("./const/text");

mongoose.set("useFindAndModify", false);
mongoose.set("returnOriginal", false);
mongoose
  .connect(config.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(text.DB_MESSAGE))
  .catch((error) => console.log(error.message));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", snackRouts);

app.listen(config.PORT, () => {
  console.log(`${text.LISTEN_URL}${config.PORT}`);
});
