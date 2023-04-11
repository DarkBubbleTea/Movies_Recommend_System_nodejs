import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 text-center">
          <h1 className="my-5">Oops! Page not found.</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary mt-3">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
