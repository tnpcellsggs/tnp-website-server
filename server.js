const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const adminRoute = require("./routes/adminroute");
const certificateRoute = require("./routes/certificateroute");
const eventRoute = require("./routes/eventroute");

const app = express();
dotenv.config();

app.use(cors());

mongoose.connect(process.env.MONGOURI, (err) => {
  if (err) console.log(err);
  else console.log("Conected to MongoDB");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/admin/signin/", adminRoute);
app.use("/admin/cert/", certificateRoute);
app.use("/admin/events/", eventRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
