import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Question from "./pages/Question";
import Introduction from "./pages/Introduction";
import QuestionDetail from "./pages/QuestionSecond";
import QuestionThird from "./pages/QuestionThird";
import QuestionFourth from "./pages/QuestionFourth";
import Pending from "./pages/Pending";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/QuestionDetail" element={<QuestionDetail />} />
        <Route path="/QuestionThird" element={<QuestionThird />} />
        <Route path="/QuestionFourth" element={<QuestionFourth />} />
        <Route path="/Pending" element={<Pending />} />
      </Routes>
    </BrowserRouter>
  );
}
