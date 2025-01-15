import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/core/Home";
import Navbar from "./components/core/Navbar";
const App = () => {
  return (
    <div className="bg-gray-300 w-full h-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
