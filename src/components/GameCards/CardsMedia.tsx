import { CardMedia } from "@mui/material";

const CardsMedia = ({
  gameImage,
  gameName,
}: {
  gameImage: string;
  gameName: string;
}) => {
  return (
    <CardMedia
      className="flex max-h-[18rem] min-h-[12rem] text-white"
      component="img"
      image={gameImage}
      loading="lazy"
      alt={gameName}
    />
  );
};

export default CardsMedia;
