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
              <SwiperSlide
                key={"slide_1"}
                style={{ backgroundImage: "url('/img/img_test6.jpg')" }}
              ></SwiperSlide>
              <SwiperSlide
                key={"slide_2"}
                style={{ backgroundImage: "url('/img/img_test7.png')" }}
              ></SwiperSlide>
              <SwiperSlide
                key={"slide_3"}
                style={{ backgroundImage: "url('/img/img_test8.jpg')" }}
              ></SwiperSlide>
              <SwiperSlide
                key={"slide_4"}
                style={{ backgroundImage: "url('/img/img_test9.jpg')" }}
              ></SwiperSlide>
              <SwiperSlide
                key={"slide_5"}
                style={{ backgroundImage: "url('/img/img_test10.jpg')" }}
              ></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SwiperPage;
