import { GameScreenshots } from "../../../Types/Types";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

import { Navigation, Virtual, Pagination, Autoplay } from "swiper/modules";

const CarouselGamePage = ({
  gameScreenshots,
}: {
  gameScreenshots: GameScreenshots[];
}) => {
  return (
    <Swiper
      navigation={true}
      loop
      pagination={{ clickable: true }}
      modules={[Navigation, Virtual, Pagination, Autoplay]}
      virtual
      autoplay={{ delay: 10000 }}
      className="w-[350px] rounded-2xl sm:w-auto sm:max-w-[640px]"
    >
      {gameScreenshots.map((screenshot, index) => (
        <SwiperSlide key={screenshot.image} virtualIndex={index}>
          <img src={screenshot.image} alt="game screenshot" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselGamePage;
