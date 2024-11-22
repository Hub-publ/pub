import useWidth from "../function/use_width";
import Header from "../component/layout/header";
import Container from "../component/layout/container";
import MainCard from "../component/card/main_card";
import ProdCard from "../component/card/prod_card";

function SizePalette() {
  const { device } = useWidth();
  return (
    <>
      <Header />
      <Container className="color_palette">
        <div className="contents_wrap">
          <div className="size_palette_template">
            <MainCard pd="var(--card-pd-mini-down) var(--card-pd-mini-down)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-mini) var(--card-pd-mini)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-mini-up) var(--card-pd-mini-up)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-small-down) var(--card-pd-small-down)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-small) var(--card-pd-small)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-small-up) var(--card-pd-small-up)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-normal-down) var(--card-pd-normal-down)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-normal) var(--card-pd-normal)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-normal-up) var(--card-pd-normal-up)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-large-down) var(--card-pd-large-down)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-large) var(--card-pd-large)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
            <MainCard pd="var(--card-pd-large-up) var(--card-pd-large-up)">
              {device === "P" ? "[PC]" : "[MB]"} 안녕하세요? 홍팀장이에요?
            </MainCard>
          </div>
          <div className="size_palette_template">
            <div className="board_wrap langth_2">
              <ProdCard img_size_type="type_16_9" img_name="img_test.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_16_9" img_name="img_test.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_16_9" img_name="img_test.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_16_9" img_name="img_test.jpg">
                123
              </ProdCard>
            </div>
            <div className="board_wrap langth_3">
              <ProdCard img_size_type="type_4_3" img_name="img_test2.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test2.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test2.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test2.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test2.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test2.jpg">
                123
              </ProdCard>
            </div>
            <div className="board_wrap langth_4">
              <ProdCard img_size_type="type_4_3" img_name="img_test3.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test3.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test3.jpg">
                123
              </ProdCard>
              <ProdCard img_size_type="type_4_3" img_name="img_test3.jpg">
                123
              </ProdCard>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SizePalette;
