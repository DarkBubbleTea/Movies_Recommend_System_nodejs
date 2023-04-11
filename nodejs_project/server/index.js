import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import movieRoutes from './routes/movieRoutes.js'
import config from "./config/config.js";
import mongoose from "mongoose";

const app = express();
const PORT = 5500;


app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log(error);
});

app.get("/", (req, res) => res.send("Welcome to the express API!"));
app.use("/predict",  movieRoutes);
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);