import { Typography } from "@mui/material";
import { yearFormatter } from "../../utils/YearFormatter";

const CardsReleaseDate = ({ released }: { released: string }) => {
  return (
    <Typography variant="subtitle1" className="flex-grow">
      Release Date: {released ? yearFormatter(released) : "Unannounced"}
    </Typography>
  );
};

export default CardsReleaseDate;
