import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/index";
import LhjMain from "./_lhj/page/index";
import Swiper from "./page/swiper";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 유진 */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/swiper" element={<Swiper />}></Route>
          {/* 지연 */}
          {/* 한주 */}
          <Route path="/lhj" element={<LhjMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
