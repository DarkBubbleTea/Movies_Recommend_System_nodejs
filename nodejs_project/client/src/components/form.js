import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ setData }) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    language: "en",
    popular: "Very Low",
    runtime: "Very Short",
    status: "Released",
    vote: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // setData(formValues);
    // navigate('/predict');
    axios
      .post("http://localhost:5500/predict", formValues)
      .then((response) => {
        setData(response.data);
        navigate("/predict");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      id="main"
    >
      <div className="border border-secondary p-5 rounded" id="form-container">
        <h1 className="text-center mb-5">Movie Suggestion</h1>
        <form
          className="row g-3 needs-validation"
          noValidate={false}
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-6">
              <label htmlFor="language" className="form-label">
                Language
              </label>
              <select
                className="form-select"
                id="language"
                required
                onChange={handleChange}
                name="language"
              >
                <option value="en">en</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="popular" className="form-label">
                Popular
              </label>
              <select
                className="form-select"
                id="popular"
                required
                onChange={handleChange}
                name="popular"
              >
                <option value="Very Low">Very Low</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label htmlFor="runtime" className="form-label">
                Runtime
              </label>
              <select
                className="form-select"
                id="runtime"
                required
                onChange={handleChange}
                name="runtime"
              >
                <option value="Very Short">Very Short</option>
                <option value="Short">Short</option>
                <option value="Medium">Medium</option>
                <option value="Long">Long</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                id="status"
                required
                onChange={handleChange}
                name="status"
              >
                <option value="Released">Released</option>
                <option value="Post Production">Post Production</option>
                <option value="Rumored">Rumored</option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="vote" className="form-label">
                Vote
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                defaultValue={0}
                className="form-control"
                id="vote"
                required
                onChange={handleChange}
                name="vote"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Predict
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
