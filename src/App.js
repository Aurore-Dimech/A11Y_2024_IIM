import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/js/Footer";
import MainPage from "./pages/js/MainPage";
import NotFoundPage from "./pages/js/404Page";
import SingleBookPage from "./pages/js/SingleBookPage";
import Search from "./pages/js/SearchPage";
import Header from "./components/js/Header";
import SkipLink from "./components/js/skipLink";

import ArrowUp from "./components/js/ArrowUp";

import { BurgerProvider } from './context/BurgerContext';

function App() {
  return (
    <BurgerProvider>
      <SkipLink />
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/livre/:id"
              element={<SingleBookPage />}
            />
            {/* changer pour mettre le nom du livre ? */}
            <Route
              path="/recherche/:query"
              element={<Search />}
            />
            {/* changer pour mettre la query ? */}
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
          <ArrowUp />
          <Footer />
        </Router>
      </div>
    </BurgerProvider>
  );
}

export default App;
