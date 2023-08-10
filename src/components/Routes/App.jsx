import Home from "../Home/Home";
import Register from "../Register/Register";
import Wall from "../Wall/Wall";
import Reminders from "../Reminders/Reminders";
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/reminders" element={<Reminders />} />
      </Routes>
    </>
  );
}

export default App;
