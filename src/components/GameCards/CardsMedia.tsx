import { CardMedia } from "@mui/material";

const CardsMedia = ({ gameImage }: { gameImage: string }) => {
  return (
    <CardMedia
      className="min-h-[12rem]"
      component="img"
      image={gameImage}
      loading="lazy"
    />
  );
};

export default CardsMedia;
