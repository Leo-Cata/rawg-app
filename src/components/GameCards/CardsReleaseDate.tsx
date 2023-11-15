//mui component
import { Typography } from "@mui/material";

// util to format the date
import { yearFormatter } from "../../utils/YearFormatter";

const CardsReleaseDate = ({ released }: { released: string }) => {
  return (
    <Typography variant="subtitle1" className="font-hyperlegible flex-grow">
      Release Date: {released ? yearFormatter(released) : "Unannounced"}
    </Typography>
  );
};

export default CardsReleaseDate;
