import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
    <HashRouter>
      {showLoading ? <Loader /> : null}
      {!showLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </HashRouter>
  );
}

export default App;
