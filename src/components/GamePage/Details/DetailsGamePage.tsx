// mui components
import { Box, Typography } from "@mui/material";

// type
import { GameTagsProps } from "../../../Types/Types";

// components
import TitleDetails from "./TitleDetails";

const DetailsGamePage = ({ title, text }: GameTagsProps) => {
  return (
    <Box>
      {/* title */}
      <TitleDetails title={title} />

      {/* if there is text display it */}

      <Typography variant="subtitle1" className="font-hyperlegible">
        {text ? text : "Not Found"}
      </Typography>
    </Box>
  );
};

export default DetailsGamePage;
