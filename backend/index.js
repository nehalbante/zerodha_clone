require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { Holdingmodel } = require("./model/holdingmodel");
const { Positionmodel } = require("./model/positionmodel");
const { Ordermodel } = require("./model/ordermodel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000", // dev
      "https://zerodha-clone-bwlg.onrender.com", // deployed dashboard
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);

// app.get("/addpositons", async (req, res) => {
//   let tempposition = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempposition.forEach((item) => {
//     let newposition = new Positionmodel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newposition.save();
//   });
//   res.send("Done!");
// });

app.get("/allholdings", async (req, res) => {
  let allholdings = await Holdingmodel.find({});
  res.json(allholdings);
});
app.get("/allposition", async (req, res) => {
  let allposition = await Positionmodel.find({});
  res.json(allposition);
});

app.post("/neworder", async (req, res) => {
  let neworder = new Ordermodel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  neworder.save();

  res.send("order saved!");
});

app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(url);
  console.log("DB connected");
});
