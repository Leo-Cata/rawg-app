// mui component
import { CardMedia } from "@mui/material";

const CardsMedia = ({
  background_image,
  name,
}: {
  background_image: string;
  name: string;
}) => {
  return (
    <CardMedia
      className="flex max-h-[18rem] min-h-[12rem]"
      component="img"
      image={background_image}
      loading="lazy"
      alt={name}
    />
  );
};

export default CardsMedia;
