import { Typography } from "@mui/material";
import { yearFormatter } from "../../utils/YearFormatter";

const CardsReleaseDate = ({ released }: { released: string }) => {
  const formattedDate = yearFormatter(released);
  return (
    <Typography variant="subtitle1" className="flex-grow">
      Release Date: {released ? formattedDate : "Unannounced"}
    </Typography>
  );
};

export default CardsReleaseDate;
