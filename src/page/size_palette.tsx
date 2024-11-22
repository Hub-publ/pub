import useWidth from "../function/use_width";
import Header from "../component/layout/header";
import Container from "../component/layout/container";
import MainCard from "../component/card/main_card";

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
        </div>
      </Container>
    </>
  );
}

export default SizePalette;
