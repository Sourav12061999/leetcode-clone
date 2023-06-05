import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Signin, Signup, Question, Error, Solve } from "./Pages";
import Context from "./context";
function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signin />} path="/signin" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Question />} path="/question" />
            <Route element={<Solve />} path="/solve/:quesID" />
            <Route element={<Error />} path="*" />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
