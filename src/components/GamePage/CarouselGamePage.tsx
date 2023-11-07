import { Button, Stack } from "@mui/material";
import { GameScreenshots } from "../../Types/Types";
import { useState } from "react";

const CarouselGamePage = ({
  gameScreenshots,
}: {
  gameScreenshots: GameScreenshots[];
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  // handles infinite scrolling with the images both backwards and forwards
  const handleNext = () => {
    if (imageIndex === gameScreenshots.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (imageIndex === 0) {
      setImageIndex(gameScreenshots.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <Stack className="" direction={"column"} alignItems={"center"}>
      <img
        src={gameScreenshots[imageIndex].image}
        alt=""
        className="max-w-[700px] rounded-2xl"
      />
      <div className="space-x-4 ">
        <Button onClick={handlePrev} variant="contained">
          prev
        </Button>
        <Button onClick={handleNext} variant="contained">
          next
        </Button>
      </div>
    </Stack>
  );
};

export default CarouselGamePage;
