import useWidth from "../function/use_width";
import Header from "../component/layout/header";
import Container from "../component/layout/container";
import MainCard from "../component/card/main_card";
import ProdCard from "../component/card/prod_card";
import RowCard from "../component/card/row_card";
import InfoText from "../component/tooltip/info_text";

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
              <ProdCard
                main_title="이 사진에서는 짱구가 너무 용감해요 🥹"
                sub_title="친구를 지켜주려는 짱구가 너무 대견해서 마음이 먹먹해지네요ㅠㅠ"
                detail_option1="100%"
                detail_option2="100%"
                detail_option3="99%"
                img_size_type="type_16_9"
                img_name="img_test.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="이 사진에서는 짱구가 너무 용감해요 🥹"
                sub_title="친구를 지켜주려는 짱구가 너무 대견해서 마음이 먹먹해지네요ㅠㅠ"
                detail_option1="100%"
                detail_option2="100%"
                detail_option3="99%"
                img_size_type="type_16_9"
                img_name="img_test.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="이 사진에서는 짱구가 너무 용감해요 🥹"
                sub_title="친구를 지켜주려는 짱구가 너무 대견해서 마음이 먹먹해지네요ㅠㅠ"
                detail_option1="100%"
                detail_option2="100%"
                detail_option3="99%"
                img_size_type="type_16_9"
                img_name="img_test.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="이 사진에서는 짱구가 너무 용감해요 🥹"
                sub_title="친구를 지켜주려는 짱구가 너무 대견해서 마음이 먹먹해지네요ㅠㅠ"
                detail_option1="100%"
                detail_option2="100%"
                detail_option3="99%"
                img_size_type="type_16_9"
                img_name="img_test.jpg"
                tag
              >
                123
              </ProdCard>
            </div>
            <div className="board_wrap langth_3">
              <ProdCard
                main_title="움하하!!! 액션가면!"
                sub_title="용맹한 액션가면을 따라하려는 짱구의 진지한 모습이 너무 귀여워요 👻"
                detail_option3="99%"
                img_size_type="type_4_3"
                img_name="img_test2.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="움하하!!! 액션가면!"
                sub_title="용맹한 액션가면을 따라하려는 짱구의 진지한 모습이 너무 귀여워요 👻"
                detail_option3="99%"
                img_size_type="type_4_3"
                img_name="img_test2.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="움하하!!! 액션가면!"
                sub_title="용맹한 액션가면을 따라하려는 짱구의 진지한 모습이 너무 귀여워요 👻"
                detail_option3="99%"
                img_size_type="type_4_3"
                img_name="img_test2.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="움하하!!! 액션가면!"
                sub_title="용맹한 액션가면을 따라하려는 짱구의 진지한 모습이 너무 귀여워요 👻"
                detail_option3="99%"
                img_size_type="type_4_3"
                img_name="img_test2.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="움하하!!! 액션가면!"
                sub_title="용맹한 액션가면을 따라하려는 짱구의 진지한 모습이 너무 귀여워요 👻"
                detail_option3="99%"
                img_size_type="type_4_3"
                img_name="img_test2.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="움하하!!! 액션가면!"
                sub_title="용맹한 액션가면을 따라하려는 짱구의 진지한 모습이 너무 귀여워요 👻"
                detail_option3="99%"
                img_size_type="type_4_3"
                img_name="img_test2.jpg"
                tag
              >
                123
              </ProdCard>
            </div>
            <div className="board_wrap langth_4">
              <ProdCard
                main_title="어엇~! 예쁜 누나다~ 누나 누나 피망 좋아해요~?!"
                sub_title="역시 짱구는 장난꾸러기 모습이 젤 잘 어울리지~ 😛"
                detail_option1="0%"
                detail_option2="0%"
                detail_option3="0%"
                img_size_type="type_4_3"
                img_name="img_test3.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="어엇~! 예쁜 누나다~ 누나 누나 피망 좋아해요~?!"
                sub_title="역시 짱구는 장난꾸러기 모습이 젤 잘 어울리지~ 😛"
                detail_option1="0%"
                detail_option2="0%"
                detail_option3="0%"
                img_size_type="type_4_3"
                img_name="img_test3.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="어엇~! 예쁜 누나다~ 누나 누나 피망 좋아해요~?!"
                sub_title="역시 짱구는 장난꾸러기 모습이 젤 잘 어울리지~ 😛"
                detail_option1="0%"
                detail_option2="0%"
                detail_option3="0%"
                img_size_type="type_4_3"
                img_name="img_test3.jpg"
                tag
              >
                123
              </ProdCard>
              <ProdCard
                main_title="어엇~! 예쁜 누나다~ 누나 누나 피망 좋아해요~?!"
                sub_title="역시 짱구는 장난꾸러기 모습이 젤 잘 어울리지~ 😛"
                detail_option1="0%"
                detail_option2="0%"
                detail_option3="0%"
                img_size_type="type_4_3"
                img_name="img_test3.jpg"
                tag
              >
                123
              </ProdCard>
            </div>
            <div className="board_wrap langth_4">
              <RowCard
                main_title="귀여운 짱구는 오늘도 쁘이~!"
                sub_title="이슬이 누나~ 나랑 프사 찍어요~😣"
                tag_title="귀여움 주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-red1"
                tag_color="tag-text-red1"
                detail_option1="100%"
                detail_option2="0%"
                detail_option3="0%"
                img_name="img_test4.jpg"
              >
                123
              </RowCard>
              <RowCard
                main_title="귀여운 짱구는 오늘도 쁘이~!"
                sub_title="이슬이 누나~ 나랑 프사 찍어요~😣"
                tag_title="귀여움 주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-red1"
                tag_color="tag-text-red1"
                detail_option1="100%"
                detail_option2="0%"
                detail_option3="0%"
                img_name="img_test4.jpg"
              >
                123
              </RowCard>
              <RowCard
                main_title="귀여운 짱구는 오늘도 쁘이~!"
                sub_title="이슬이 누나~ 나랑 프사 찍어요~😣"
                tag_title="귀여움 주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-red1"
                tag_color="tag-text-red1"
                detail_option1="100%"
                detail_option2="0%"
                detail_option3="0%"
                img_name="img_test4.jpg"
              >
                123
              </RowCard>
              <RowCard
                main_title="귀여운 짱구는 오늘도 쁘이~!"
                sub_title="이슬이 누나~ 나랑 프사 찍어요~😣"
                tag_title="귀여움 주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-red1"
                tag_color="tag-text-red1"
                detail_option1="100%"
                detail_option2="0%"
                detail_option3="0%"
                img_name="img_test4.jpg"
              >
                123
              </RowCard>
            </div>
            <div className="board_wrap langth_4">
              <RowCard
                main_title="난 김밥으로 세상을 구할거야‼️"
                sub_title="김밥이 제일 조아아아🍙"
                tag_title="근엄주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-green1"
                tag_color="tag-text-green1"
                detail_option1="1%"
                detail_option2="100%"
                detail_option3="50%"
                img_name="img_test5.jpg"
                square_type
              >
                123
              </RowCard>
              <RowCard
                main_title="난 김밥으로 세상을 구할거야‼️"
                sub_title="김밥이 제일 조아아아🍙"
                tag_title="근엄주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-green1"
                tag_color="tag-text-green1"
                detail_option1="1%"
                detail_option2="100%"
                detail_option3="50%"
                img_name="img_test5.jpg"
                square_type
              >
                123
              </RowCard>
              <RowCard
                main_title="난 김밥으로 세상을 구할거야‼️"
                sub_title="김밥이 제일 조아아아🍙"
                tag_title="근엄주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-green1"
                tag_color="tag-text-green1"
                detail_option1="1%"
                detail_option2="100%"
                detail_option3="50%"
                img_name="img_test5.jpg"
                square_type
              >
                123
              </RowCard>
              <RowCard
                main_title="난 김밥으로 세상을 구할거야‼️"
                sub_title="김밥이 제일 조아아아🍙"
                tag_title="근엄주의"
                tag_bg_color="transparent"
                tag_bd_color="tag-bd-green1"
                tag_color="tag-text-green1"
                detail_option1="1%"
                detail_option2="100%"
                detail_option3="50%"
                img_name="img_test5.jpg"
                square_type
              >
                123
              </RowCard>
            </div>
          </div>
          <div className="size_palette_template">
            <InfoText
              contents="숨을 죽이고 너의 대답을 기다릴게<br/>턴을 너에게 넘긴채로~"
              size="small"
              color="bk-to-wh1"
            />
            <InfoText
              contents="만약 아니라 하더라도 말해 줘<br/>Baby Love Me Or Leave Me Tonight"
              size="normal"
              color="gr-to-wh1"
            />
            <InfoText
              contents="So 대답해줘!어!어!어↗️어!어!어!어~!<br/>숨김 없이 솔직하게"
              size="normal"
              color="bk-opc-to-wh3"
            />
            <InfoText
              contents="So 대답해줘!어!어!어↗️어!어!어!어~!<br/>Baby Love Me Or Leave Me Tonight"
              size="large"
              color="bk-opc-to-wh9"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default SizePalette;
