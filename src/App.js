import { HashRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import About from "./pages/Home/About";

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 2000); // Adjust timing as needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <HashRouter>
      <ScrollToHashElement />
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
