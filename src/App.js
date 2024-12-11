import { Route, Routes } from "react-router-dom";
import Travel from "./components/Travel/Travel";
import HomePage from "./components/Homepage/Homepage";
import Hotel from "./components/Hotel/Hotel";
import Flight from "./components/Flight/Flight";
import Navbar from "./components/Nabvar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/flights" element={<Flight />} />
      </Routes>
    </>
  );
}

export default App;
