const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 5000;

// Middleware to parse JSON bodies and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/crud-api")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
