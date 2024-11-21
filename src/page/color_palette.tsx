import Header from "../component/layout/header";
import Container from "../component/layout/container";
import Select from "react-select";
import Attachment from "../component/form/attachment";
import Button from "../component/form/button";
import Radio from "../component/form/radio";
import Pagination from "../component/form/pagination";

function ColorPalette() {
  return (
    <>
      <Header />
      <Container className="color_palette">
        <div className="contents_wrap">
          <div className="color_palette_template">
            {/* Black */}
            <div>
              <div className="area">
                <h2>Black Palette</h2>
                <p style={{ color: "var(--text-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* Gray */}
            <div>
              <div className="area">
                <h2>Gray Palette</h2>
                <p style={{ color: "var(--text-gr1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* White */}
            <div>
              <div className="area">
                <h2>White Palette</h2>
                <p style={{ color: "var(--text-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* Black 투명도 */}
            <div>
              <div className="area">
                <h2>Black Opacity Palette</h2>
                <p style={{ color: "var(--text-bk-opc1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* White 투명도 */}
            <div>
              <div className="area">
                <h2>White Opacity Palette</h2>
                <p style={{ color: "var(--text-wh-opc1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="color_palette_template background">
            {/* Black */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh9)" }}></li>
              </ul>
            </div>
            {/* Gray */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk9)" }}></li>
              </ul>
            </div>
            {/* White */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk9)" }}></li>
              </ul>
            </div>
            {/* Black Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh9)" }}></li>
              </ul>
            </div>
            {/* White Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk9)" }}></li>
              </ul>
            </div>
          </div>
          <div className="color_palette_template background card">
            {/* Black */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr1)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr2)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr3)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr4)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr5)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr6)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr7)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr8)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr9)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh9)" }}
                ></li>
              </ul>
            </div>
            {/* Gray */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh1)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh2)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh3)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh4)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh5)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh6)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh7)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh8)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh9)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk9)" }}
                ></li>
              </ul>
            </div>
            {/* White */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr1)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr2)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr3)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr4)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr5)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr6)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr7)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr8)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr9)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk9)" }}
                ></li>
              </ul>
            </div>
            {/* Black Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh9)" }}
                ></li>
              </ul>
            </div>
            {/* White Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk9)" }}
                ></li>
              </ul>
            </div>
          </div>
          <div className="color_palette_template button">
            <ul>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk1"
                  bd_color="btn-bd-bk1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk1"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-blue1"
                  bd_color="btn-bd-blue1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-blue1"
                  color="btn-text-blue1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-green1"
                  bd_color="btn-bd-green1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-green1"
                  color="btn-text-green1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr1"
                  bd_color="btn-bd-bk-to-gr1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr2"
                  bd_color="btn-bd-bk-to-gr2"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr3"
                  bd_color="btn-bd-bk-to-gr3"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr4"
                  bd_color="btn-bd-bk-to-gr4"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr5"
                  bd_color="btn-bd-bk-to-gr5"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr6"
                  bd_color="btn-bd-bk-to-gr6"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr7"
                  bd_color="btn-bd-bk-to-gr7"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr8"
                  bd_color="btn-bd-bk-to-gr8"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-gr9"
                  bd_color="btn-bd-bk-to-gr9"
                  color="btn-text-wh1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh1"
                  bd_color="btn-bd-bk-to-wh1"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh2"
                  bd_color="btn-bd-bk-to-wh2"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh3"
                  bd_color="btn-bd-bk-to-wh3"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh4"
                  bd_color="btn-bd-bk-to-wh4"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh5"
                  bd_color="btn-bd-bk-to-wh5"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh6"
                  bd_color="btn-bd-bk-to-wh6"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh7"
                  bd_color="btn-bd-bk-to-wh7"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh8"
                  bd_color="btn-bd-bk-to-wh8"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-to-wh9"
                  bd_color="btn-bd-bk-to-wh9"
                  color="btn-text-wh-to-bk1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk1"
                  bd_color="btn-bd-gr-to-bk1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk2"
                  bd_color="btn-bd-gr-to-bk2"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk3"
                  bd_color="btn-bd-gr-to-bk3"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk4"
                  bd_color="btn-bd-gr-to-bk4"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk5"
                  bd_color="btn-bd-gr-to-bk5"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk6"
                  bd_color="btn-bd-gr-to-bk6"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk7"
                  bd_color="btn-bd-gr-to-bk7"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk8"
                  bd_color="btn-bd-gr-to-bk8"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-bk9"
                  bd_color="btn-bd-gr-to-bk9"
                  color="btn-text-wh1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh1"
                  bd_color="btn-bd-gr-to-wh1"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh2"
                  bd_color="btn-bd-gr-to-wh2"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh3"
                  bd_color="btn-bd-gr-to-wh3"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh4"
                  bd_color="btn-bd-gr-to-wh4"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh5"
                  bd_color="btn-bd-gr-to-wh5"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh6"
                  bd_color="btn-bd-gr-to-wh6"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh7"
                  bd_color="btn-bd-gr-to-wh7"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh8"
                  bd_color="btn-bd-gr-to-wh8"
                  color="btn-text-wh-to-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-gr-to-wh9"
                  bd_color="btn-bd-gr-to-wh9"
                  color="btn-text-wh-to-bk1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr1"
                  color="btn-text-bk-to-gr1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr2"
                  color="btn-text-bk-to-gr2"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr3"
                  color="btn-text-bk-to-gr3"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr4"
                  color="btn-text-bk-to-gr4"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr5"
                  color="btn-text-bk-to-gr5"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr6"
                  color="btn-text-bk-to-gr6"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr7"
                  color="btn-text-bk-to-gr7"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr8"
                  color="btn-text-bk-to-gr8"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk-to-gr9"
                  color="btn-text-bk-to-gr9"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk1"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk2"
                  color="btn-text-bk2"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk3"
                  color="btn-text-bk3"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk4"
                  color="btn-text-bk4"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk5"
                  color="btn-text-bk5"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk6"
                  color="btn-text-bk6"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk7"
                  color="btn-text-bk7"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk8"
                  color="btn-text-bk8"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="transparent"
                  bd_color="btn-bd-bk9"
                  color="btn-text-bk9"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc1"
                  bd_color="btn-bd-bk-opc1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc2"
                  bd_color="btn-bd-bk-opc2"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc3"
                  bd_color="btn-bd-bk-opc3"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc4"
                  bd_color="btn-bd-bk-opc4"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc5"
                  bd_color="btn-bd-bk-opc5"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc6"
                  bd_color="btn-bd-bk-opc6"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc7"
                  bd_color="btn-bd-bk-opc7"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc8"
                  bd_color="btn-bd-bk-opc8"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc9"
                  bd_color="btn-bd-bk-opc9"
                  color="btn-text-wh1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh1"
                  bd_color="btn-bd-bk-opc-to-wh1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh2"
                  bd_color="btn-bd-bk-opc-to-wh2"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh3"
                  bd_color="btn-bd-bk-opc-to-wh3"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh4"
                  bd_color="btn-bd-bk-opc-to-wh4"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh5"
                  bd_color="btn-bd-bk-opc-to-wh5"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh6"
                  bd_color="btn-bd-bk-opc-to-wh6"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh7"
                  bd_color="btn-bd-bk-opc-to-wh7"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh8"
                  bd_color="btn-bd-bk-opc-to-wh8"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-bk-opc-to-wh9"
                  bd_color="btn-bd-bk-opc-to-wh9"
                  color="btn-text-wh1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc1"
                  bd_color="btn-bd-wh-opc1"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc2"
                  bd_color="btn-bd-wh-opc2"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc3"
                  bd_color="btn-bd-wh-opc3"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc4"
                  bd_color="btn-bd-wh-opc4"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc5"
                  bd_color="btn-bd-wh-opc5"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc6"
                  bd_color="btn-bd-wh-opc6"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc7"
                  bd_color="btn-bd-wh-opc7"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc8"
                  bd_color="btn-bd-wh-opc8"
                  color="btn-text-bk1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc9"
                  bd_color="btn-bd-wh-opc9"
                  color="btn-text-bk1"
                />
              </li>
              <li>
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk1"
                  bd_color="btn-bd-wh-opc-to-bk1"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk2"
                  bd_color="btn-bd-wh-opc-to-bk2"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk3"
                  bd_color="btn-bd-wh-opc-to-bk3"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk4"
                  bd_color="btn-bd-wh-opc-to-bk4"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk5"
                  bd_color="btn-bd-wh-opc-to-bk5"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk6"
                  bd_color="btn-bd-wh-opc-to-bk6"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk7"
                  bd_color="btn-bd-wh-opc-to-bk7"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk8"
                  bd_color="btn-bd-wh-opc-to-bk8"
                  color="btn-text-wh1"
                />
                <Button
                  title="버튼버튼"
                  size="h_38"
                  bg_color="btn-bg-wh-opc-to-bk9"
                  bd_color="btn-bd-wh-opc-to-bk9"
                  color="btn-text-wh1"
                />
              </li>
            </ul>
          </div>
          <div className="color_palette_template">
            <div className="table_wrap">
              <table className="detail">
                <colgroup>
                  <col className="col_th" />
                  <col />
                  <col className="col_th" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      TH<span className="red_t">*</span>
                    </th>
                    <td colSpan={3}>
                      <input
                        type="text"
                        placeholder="100자 이내"
                        maxLength={100}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      TH<span className="red_t">*</span>
                    </th>
                    <td>
                      <Select
                        placeholder="선택"
                        options={[
                          { value: "Development", label: "개발팀" },
                          { value: "Plan", label: "기획팀" },
                          { value: "Design", label: "디자인팀" },
                          { value: "Publishing", label: "퍼블팀" },
                        ]}
                        isDisabled
                      />
                    </td>
                    <th>
                      TH<span className="red_t">*</span>
                    </th>
                    <td>
                      <div className="form_wrap">
                        <Radio id="radio_a1" name="radio_a" label="선택1" />
                        <Radio id="radio_a2" name="radio_a" label="선택2" />
                        <Radio id="radio_a3" name="radio_a" label="선택3" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      TH / TH<span className="red_t">*</span>
                    </th>
                    <td>홍길동 / 2024-11-14</td>
                    <th>
                      TH<span className="red_t">*</span>
                    </th>
                    <td>1,234,567</td>
                  </tr>
                  <tr>
                    <th>
                      TH<span className="red_t">*</span>
                    </th>
                    <td colSpan={3}>
                      <textarea
                        name=""
                        id=""
                        rows={5}
                        placeholder="500자 이내"
                        maxLength={500}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>TH</th>
                    <td colSpan={3}>
                      <Attachment id="attach_01" maxText={10} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table_wrap">
              {/* 오른쪽 영역에 버튼만 있을 때 */}
              {/* <div className="table_top flex justify_start">
                  <p className="num">총 갯수</p>
                </div> */}
              {/* 양쪽 영역에 버튼만 있을 때 */}
              <div className="table_top flex align_center justify_between">
                <p className="num">총 갯수</p>
                <div>
                  <Button
                    title="버튼버튼"
                    size="h_28"
                    bg_color="btn-bg-bk1"
                    bd_color="btn-bd-bk1"
                    color="btn-text-wh1"
                  />
                  <Button
                    title="버튼버튼"
                    size="h_28"
                    bg_color="transparent"
                    bd_color="btn-bd-bk1"
                    color="btn-text-bk1"
                  />
                  <Button
                    title="버튼버튼"
                    size="h_28"
                    bg_color="btn-bg-blue1"
                    bd_color="btn-bd-blue1"
                    color="btn-text-wh1"
                  />
                  <Button
                    title="버튼버튼"
                    size="h_28"
                    bg_color="transparent"
                    bd_color="btn-bd-blue1"
                    color="btn-text-blue1"
                  />
                  <Button
                    title="버튼버튼"
                    size="h_28"
                    bg_color="btn-bg-green1"
                    bd_color="btn-bd-green1"
                    color="btn-text-wh1"
                  />
                  <Button
                    title="버튼버튼"
                    size="h_28"
                    bg_color="transparent"
                    bd_color="btn-bd-green1"
                    color="btn-text-green1"
                  />
                </div>
              </div>
              {/* 왼쪽 영역에 버튼만 있을 때 */}
              {/* <div className="table_top flex justify_end">
                  <Button title="버튼버튼" size="h_28" color="black" />
                  <Button title="버튼버튼" size="h_28" color="black_line" />
                  <Button title="버튼버튼" size="h_28" color="blue" />
                  <Button title="버튼버튼" size="h_28" color="blue_line" />
                  <Button title="버튼버튼" size="h_28" color="green" />
                  <Button title="버튼버튼" size="h_28" color="green_line" />
                </div> */}
              <div className="scroll_area">
                <table className="list">
                  <colgroup>
                    <col width={50} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button className="icon ham_btn"></button>
                      </td>
                      <td className="ellipsis_td">
                        <p className="ellipsis">
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                        </p>
                      </td>
                      <td>홍길동</td>
                      <td>-</td>
                      <td>사원</td>
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
                    </tr>
                    <tr>
                      <td>
                        <button className="icon ham_btn"></button>
                      </td>
                      <td className="ellipsis_td">
                        <p className="ellipsis">
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                        </p>
                      </td>
                      <td>홍길동</td>
                      <td>-</td>
                      <td>사원</td>
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
                    </tr>
                    <tr>
                      <td>
                        <button className="icon ham_btn"></button>
                      </td>
                      <td className="ellipsis_td">
                        <p className="ellipsis">
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                        </p>
                      </td>
                      <td>홍길동</td>
                      <td>-</td>
                      <td>사원</td>
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
                    </tr>
                    <tr>
                      <td>
                        <button className="icon ham_btn"></button>
                      </td>
                      <td className="ellipsis_td">
                        <p className="ellipsis">
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                        </p>
                      </td>
                      <td>홍길동</td>
                      <td>-</td>
                      <td>사원</td>
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination totalPage={5} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default ColorPalette;
