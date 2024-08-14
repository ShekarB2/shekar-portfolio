import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 2000); // Adjust timing as needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <BrowserRouter>
      {showLoading ? <Loader /> : null}
      {!showLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
