import { Typography } from "@mui/material";

const CardsReleaseDate = ({ releaseDate }: { releaseDate: string }) => {
  //regex value to turn YYYY-MM-DD into DD/MM/YYYY
  const dayMonthYearRegex = /(\d{4})-(\d{2})-(\d{2})/;
  const dayMonthYearStringRearrange = "$3/$2/$1";

  return (
    <>
      <Typography variant="subtitle1" className="flex-grow">
        Release Date:{" "}
        {releaseDate.replace(dayMonthYearRegex, dayMonthYearStringRearrange)}
      </Typography>
    </>
  );
};

export default CardsReleaseDate;
