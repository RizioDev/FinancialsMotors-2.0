import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = ({ moto }) => {
  return (
    <div className="mt-[85px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <img src={moto.imgMoto.bannerTop} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a href="/financia">
            <img src="/Financiacion/bannerTopFinan.png" alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
