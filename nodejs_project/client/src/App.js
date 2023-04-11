import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/form";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NotFoundPage from "./components/notFoundPage";
import MovieData from "./components/movieData";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const setData = (_movies) => {
    if (_movies) {
      setMovies(_movies)
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Form setData={setData} />} />
        <Route path="/predict" element={ movies ? <MovieData data={movies} /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
