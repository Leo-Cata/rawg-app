import { GameInfo } from "../../Types/Types";
import { Box, Chip, Grid, Typography, Stack } from "@mui/material";
import { yearFormatter } from "../../utils/YearFormatter";
import CardsPlatforms from "../GameCards/CardsPlatforms";
import DOMPurify from "dompurify";
import GamePageTags from "./GamePageTags";

const GamePage = ({ gameData }: { gameData: GameInfo }) => {
  console.log(gameData);

  // returns the date in DD/MM/YYY
  const formattedDate = yearFormatter(gameData.released);

  // sanitizes dom elements
  const sanitizedHTML = DOMPurify.sanitize(gameData.description);

  console.log(gameData.platforms);
  return (
    <Grid container justifyContent={"center"} marginY={8} px={2}>
      <Grid item className="space-y-8">
        <Typography variant="h1" textAlign={"center"}>
          {gameData.name}
        </Typography>
        <Box className="space-y-1 font-bold">
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            justifyContent={"space-between"}
          >
            <Chip label={`Released: ${formattedDate}`} color="primary" />
            <CardsPlatforms parent_platforms={gameData.parent_platforms} />
          </Stack>
          <Chip
            label={`Average Playtime: ${gameData.playtime} Hours`}
            color="primary"
          />
        </Box>
        <Typography
          className="max-w-[650px]"
          variant="body1"
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          className="max-w-[250px]"
        >
          <GamePageTags title="ESRB rating" text={gameData.esrb_rating.name} />
          <GamePageTags title="Metascore" chip={gameData.metacritic} />
          <GamePageTags
            title="Platforms"
            GameInfoPlatform={gameData.platforms}
          />

          {/* <Box>
            <Typography variant="body1" className=" text-white/50 underline">
              ESRB Rating
            </Typography>
            <Typography variant="body1">
              {gameData?.esrb_rating.name}
            </Typography>
          </Box>

          <Box>
            <Typography className=" text-white/50 underline">
              Metascore
            </Typography>
            <Chip
              label={gameData.metacritic}
              color="success"
              variant="outlined"
            />
          </Box> */}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default GamePage;
