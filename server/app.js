import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import trainings from "./routers/trainings.js";

//Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

//Logging middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

//Note: Middleware goes before the creation of the routes
app.use(cors);
app.use(express.json());
app.use(logging);

//Note response.status(200) method is unnecessary since the response status is 200 by default
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});
//Note response.status(200) method is unnecessary since the response status is 200 by default

app.use("/trainings", trainings);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log("Listening on port 4040"));
