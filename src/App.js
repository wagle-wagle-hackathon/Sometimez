import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Question from "./pages/Question/Question";
import Introduction from "./pages/Introduction";
import QuestionSecond from "./pages/Question/QuestionSecond";
import QuestionThird from "./pages/Question/QuestionThird";
import QuestionFourth from "./pages/Question/QuestionFourth";
import Pending from "./pages/Pending";
import QuestionLast from "./pages/Question/QuestionLast";
import Result from "./pages/Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/QuestionSecond" element={<QuestionSecond />} />
        <Route path="/QuestionThird" element={<QuestionThird />} />
        <Route path="/QuestionFourth" element={<QuestionFourth />} />
        <Route path="/Pending" element={<Pending />} />
        <Route path="/QuestionLast" element={<QuestionLast />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
