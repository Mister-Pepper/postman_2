const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const playerRoutes = require("./routes/players");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/players", playerRoutes);

mongoose
  .connect("mongodb://localhost:27017/api_project_database")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port " + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));
