import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/index";
import IndexAjy from "./_ajy/page/index";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path=""></Route>
          {/* 유진 */}
          <Route path="/main" element={<Main />}></Route>
          {/* 지연 */}
          <Route path="/ajy" element={<IndexAjy />}></Route>
          {/* 한주 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
