import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import WorkoutList from "./components/WorkoutList";
import CreateWorkout from "./components/CreateWorkout";
import CreateUser from "./components/CreateUser";
import EditWorkout from "./components/EditWorkout";

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<WorkoutList/>} />
        <Route path="/edit/:id" element={<EditWorkout/>} />
        <Route path="/create" element={<CreateWorkout/>} />
        <Route path="/user" element={<CreateUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
