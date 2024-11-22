import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/index";
import Index2 from "./page/index2";
import ColorPalette from "./page/color_palette";
import SizePalette from "./page/size_palette";
import Table from "./page/table";
import TabSample from "./page/tab_sample";
import Swiper from "./page/swiper";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/index2" element={<Index2 />}></Route>
          <Route path="/color_palette" element={<ColorPalette />}></Route>
          <Route path="/size_palette" element={<SizePalette />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/tab_sample" element={<TabSample />}></Route>
          <Route path="/swiper" element={<Swiper />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
