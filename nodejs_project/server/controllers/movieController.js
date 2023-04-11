import axios from "axios";
import mongoose from "mongoose";
import config from "../config/config.js";
import Model from "../databases/model.js";

export const predict = (req, res) => {
  if (
    req.body.language &&
    req.body.popular &&
    req.body.runtime &&
    req.body.status &&
    !isNaN(req.body.vote)
  ) {
    console.log(req.body)
    axios
      .post("http://127.0.0.1:5000/predict", req.body)
      .then((response) => {
        res.status(200).send(response.data);
        const movie = new Model({...req.body,result:response.data})
        movie.save()
          .then(() => console.log("User saved to MongoDB"))
          .catch((err) => console.error("Error saving user to MongoDB", err));
      })
      .catch((error) => {
        console.error(error.message);
        res.status(500).send({ message: "Python server Error" });
      });
  } else {
    res.status(400).send({ message: "bad request" });
    console.log("Invalid Data");
  }
};
