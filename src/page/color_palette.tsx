import Container from "../component/layout/container";
import Header from "../component/layout/header";

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
        </div>
      </Container>
    </>
  );
}

export default ColorPalette;
