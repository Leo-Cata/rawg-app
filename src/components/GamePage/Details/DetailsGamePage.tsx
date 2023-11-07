import { Box, Typography } from "@mui/material";
import { GameTagsProps } from "../../../Types/Types";
import TitleDetails from "./TitleDetails";

const DetailsGamePage = ({ title, text }: GameTagsProps) => {
  return (
    <Box>
      {/* title */}
      <TitleDetails title={title} />

      {/* if there is text display it */}

      <Typography>{text ? text : "Not Found"}</Typography>
    </Box>
  );
};

export default DetailsGamePage;
