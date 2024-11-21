import { Link } from "react-router-dom";

function Index2() {
  return (
    <>
      <div className="index2">
        <ul>
          <li>
            <Link target="_blank" to={"/"}>
              메인
            </Link>
          </li>
          <li>
            <Link target="_blank" to={"/color_palette"}>
              컬러 팔레트
            </Link>
          </li>
          <li>
            <Link target="_blank" to={"/table"}>
              테이블
            </Link>
          </li>
          <li>
            <Link target="_blank" to={"/tab_sample"}>
              탭
            </Link>
          </li>
          <li>
            <Link target="_blank" to={"/swiper"}>
              스와이퍼
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Index2;
