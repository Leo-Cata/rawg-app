import { Box, Chip, Typography } from "@mui/material";
import { GameTagsProps } from "../../Types/Types";
import React from "react";

const GamePageTags = ({
  title,
  text,
  chip,
  GameInfoPlatform,
}: GameTagsProps) => {
  return (
    <Box className="mb-4 pl-2">
      {/* title */}
      <Typography variant="body1" className="text-white/50 underline">
        {title}
      </Typography>

      {/* if there is text display it */}
      {text && <Typography>{text}</Typography>}

      {/* if there is a chip aka metascore display it */}
      {chip && <Chip label={chip} color="success" variant="outlined" />}

      {/* for the GameInfoPlatform we map through them */}
      <Typography className="max-w-[150px]">
        {GameInfoPlatform &&
          GameInfoPlatform.map((platform, index) => (
            <React.Fragment key={platform.platform.id}>
              {platform.platform.name}

              {/* if the index is equal to the length + 1 of the GameInfoPlatform, don't add a coma */}
              {GameInfoPlatform.length === index + 1 ? "" : ", "}
            </React.Fragment>
          ))}
      </Typography>
    </Box>
  );
};

export default GamePageTags;
