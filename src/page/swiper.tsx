import Header from "../component/layout/header";
import Container from "../component/layout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import "../style/page/swiper_page.scss";

function SwiperPage() {
  SwiperCore.use([Navigation, Autoplay, Pagination]);
  return (
    <>
      <Header />
      <Container className="swiper_page">
        <div className="contents_wrap">
          <div className="area">
            <Swiper
              className="mySwiper"
              onSlideChange={(e) => {
                console.log(e);
              }}
              onSwiper={(e) => {
                console.log(e);
              }}
              navigation={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              slidesPerView={2}
              // centeredSlides={true}
              // loop={true}
              // lazy={true}
              // observer={true}
              // observeParents={true}
              // navigation={{
              //   prevEl: navigationPrevRef.current,
              //   nextEl: navigationNextRef.current,
              // }}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              // speed={1000}
              // breakpoints={{
              //   320: {},
              //   640: {},
              //   767: {},
              //   991: {},
              // }}
            >
              <SwiperSlide key={"slide_1"}>Slide 1</SwiperSlide>
              <SwiperSlide key={"slide_2"}>Slide 2</SwiperSlide>
              <SwiperSlide key={"slide_3"}>Slide 3</SwiperSlide>
              <SwiperSlide key={"slide_4"}>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SwiperPage;
