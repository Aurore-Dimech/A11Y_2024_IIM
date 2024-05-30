import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/js/Footer";
import MainPage from "./pages/js/MainPage";
import NotFoundPage from "./pages/js/404Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MainPage />}
          />
          {/* Other routes here */}
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
