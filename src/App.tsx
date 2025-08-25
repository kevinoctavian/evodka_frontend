import { Route, Routes } from "react-router";
import {
  Candidates,
  Help,
  Home,
  Login,
  Register,
  Schools,
  Votes,
} from "@pages/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/votes" element={<Votes />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
