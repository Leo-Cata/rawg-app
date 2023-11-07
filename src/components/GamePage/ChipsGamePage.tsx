import { Box, Chip, Stack } from "@mui/material";
import CardsPlatforms from "../GameCards/CardsPlatforms";
import { yearFormatter } from "../../utils/YearFormatter";
import { Parent_Platforms } from "../../Types/Types";

const ChipsGamePage = ({
  releaseDate,
  platforms,
  playtime,
}: {
  releaseDate: string;
  platforms: Parent_Platforms[];
  playtime: number;
}) => {
  // returns the date in DD/MM/YYY

  return (
    <Box className="space-y-1 font-bold">
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        justifyContent={"space-between"}
      >
        <Chip
          label={`Released: ${
            releaseDate ? yearFormatter(releaseDate) : "Unannounced"
          }`}
          color="primary"
        />
        <CardsPlatforms parent_platforms={platforms} />
      </Stack>
      <Chip label={`Average Playtime: ${playtime} Hours`} color="primary" />
    </Box>
  );
};

export default ChipsGamePage;
