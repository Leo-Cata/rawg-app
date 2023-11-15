// mui component
import { Typography } from "@mui/material";

const TitleDetails = ({ title }: { title: string }) => {
  return (
    <Typography variant="body1" className=" pb-0 text-white/50 underline">
      {title}
    </Typography>
  );
};

export default TitleDetails;
