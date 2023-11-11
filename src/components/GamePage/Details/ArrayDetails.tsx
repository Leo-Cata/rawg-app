import { Typography, Box } from "@mui/material";
import React from "react";
import { Tags, Parent_Platforms } from "../../../Types/Types";
import TitleDetails from "./TitleDetails";

const ArrayDetails = ({
  platforms,
  tags,
  title,
}: {
  platforms?: Parent_Platforms[];
  tags?: Tags[];
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

      {tags?.length && (
        <Typography>
          {tags
            ? tags.map((array, index) => (
                <React.Fragment key={array.id}>
                  {array.name}

                  {/* if the index is equal to the length + 1 of the GameInfoPlatform, don't add a coma */}
                  {tags.length === index + 1 ? "" : ", "}
                </React.Fragment>
              ))
            : "Not Found"}
        </Typography>
      )}
    </Box>
  );
};

export default ArrayDetails;
