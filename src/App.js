import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Question from "./pages/Question";
import Introduction from "./pages/Introduction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}
