import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import WorkoutList from "./components/WorkoutList";

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<WorkoutList/>} />
      </Routes>
    </Router>
  );
}

export default App;
