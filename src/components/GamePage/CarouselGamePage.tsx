import { GameScreenshots } from "../../Types/Types";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

// modules from swiper
import { Navigation, Virtual, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
const CarouselGamePage = ({
  gameScreenshots,
}: {
  gameScreenshots: GameScreenshots[];
}) => {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

  const handleOpen = (index: number) => {
    setSelectedImage(gameScreenshots[index].image);
    setIsImageOpen(true);
  };
  const handleClose = () => {
    setIsImageOpen(false);
  };
  return (
    <>
      <Swiper
        breakpoints={{
          1000: {
            navigation: {
              enabled: true,
            },
          },
          320: { navigation: { enabled: false } },
        }}
        navigation={true}
        loop
        pagination={{ clickable: true, type: "progressbar" }}
        modules={[Navigation, Virtual, Pagination, Autoplay]}
        virtual
        autoplay={{ delay: 10000 }}
        className="w-full rounded-2xl"
        spaceBetween={30}
      >
        {gameScreenshots.map((screenshot, index) => (
          <SwiperSlide
            key={screenshot.image}
            virtualIndex={index}
            onClick={() => handleOpen(index)}
          >
            <img src={screenshot.image} alt="game screenshot" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* full screens image */}
      {isImageOpen && (
        <div
          onClick={handleClose}
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
        >
          <img
            src={selectedImage}
            alt="fullscreen image"
            className="max-h-full max-w-full"
          />
        </div>
      )}
    </>
  );
};

export default CarouselGamePage;
