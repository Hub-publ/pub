import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/index";
import Index2 from "./page/index2";
import ColorPalette from "./page/color_palette";
import SizePalette from "./page/size_palette";
import Table from "./page/table";
import TabSample from "./page/tab_sample";
import Swiper from "./page/swiper";
import Chatting from "./page/chatting";
import Comment from "./page/comment";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 페이지 리스트 */}
          <Route path="/index2" element={<Index2 />}></Route>
          {/* 템플릿 */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/color_palette" element={<ColorPalette />}></Route>
          <Route path="/size_palette" element={<SizePalette />}></Route>
          {/* 예제 페이지 */}
          <Route path="/table" element={<Table />}></Route>
          <Route path="/tab" element={<TabSample />}></Route>
          <Route path="/chatting" element={<Chatting />}></Route>
          <Route path="/comment" element={<Comment />}></Route>
          <Route path="/swiper" element={<Swiper />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
