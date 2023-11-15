// type
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

// react hooks
import { useEffect, useState } from "react";

// close icon
import { RiCloseCircleFill } from "react-icons/ri";

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // sets the width
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleWindowResize();

    // attaches the function to run when the window resizes
    window.addEventListener("resize", handleWindowResize);

    // cleanup function to prevent memory leak and unexpected behavior
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    // every time isImageOpen changes state, this will prevent the scrolling or enable it
    if (isImageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isImageOpen]);

  return (
    <div>
      <Swiper
        navigation={windowWidth < 1000 ? false : true}
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
            <img
              src={screenshot.image}
              alt="game screenshot"
              loading="lazy"
              className="w-full rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* full screens image */}
      {isImageOpen && (
        <div
          onClick={handleClose}
          className="fixed left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center bg-black bg-opacity-75 "
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="fullscreen image"
              className="max-h-full max-w-full"
            />
            <RiCloseCircleFill className="absolute right-[1%] top-[1%] z-20 text-2xl font-extrabold" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselGamePage;
