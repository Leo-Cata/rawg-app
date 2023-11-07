import { Typography, Box } from "@mui/material";
import React from "react";
import { Genres, Parent_Platforms } from "../../../Types/Types";
import TitleDetails from "./TitleDetails";

const ArrayDetails = ({
  platforms,
  genres,
  title,
}: {
  platforms?: Parent_Platforms[];
  genres?: Genres[];
  title: string;
}) => {
  return (
    <Box className="max-w-[250px]">
      <TitleDetails title={title} />
      {/* for the GameInfoPlatform we map through them */}
      {platforms && (
        <Typography>
          {platforms
            ? platforms.map((array, index) => (
                <React.Fragment key={array.platform.id}>
                  {array.platform.name}

                  {/* if the index is equal to the length + 1 of the GameInfoPlatform, don't add a coma */}
                  {platforms.length === index + 1 ? "" : ", "}
                </React.Fragment>
              ))
            : "Not Found"}
        </Typography>
      )}

      {genres && (
        <Typography>
          {genres
            ? genres.map((array, index) => (
                <React.Fragment key={array.id}>
                  {array.name}

                  {/* if the index is equal to the length + 1 of the GameInfoPlatform, don't add a coma */}
                  {genres.length === index + 1 ? "" : ", "}
                </React.Fragment>
              ))
            : "Not Found"}
        </Typography>
      )}
    </Box>
  );
};

export default ArrayDetails;
