import { Box, Typography } from "@mui/material";
import TitleDetails from "./Details/TitleDetails";
import { Tags } from "../../Types/Types";
import React from "react";

const TagsGamePage = ({ tags }: { tags: Tags[] }) => {
  return (
    <Box maxWidth={"600px"}>
      <TitleDetails title="Tags" />
      {tags && (
        <Typography>
          {tags.length
            ? tags.map((tag, index) => (
                <React.Fragment key={tag.id}>
                  {tag.name}

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

export default TagsGamePage;
