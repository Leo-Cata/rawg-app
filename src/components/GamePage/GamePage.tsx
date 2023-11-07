import { GameInfo, GameScreenshots } from "../../Types/Types";
import { Grid, Typography, Stack } from "@mui/material";
import DetailsGamePage from "./Details/DetailsGamePage";
import ChipsGamePage from "./ChipsGamePage";
import DescriptionGamePage from "./DescriptionGamePage";
// import CarouselGamePage from "./CarouselGamePage";
import MetascoreDetailsGamePage from "./Details/MetascoreDetailsGamePage";
import ArrayDetails from "./Details/ArrayDetails";
import TagsGamePage from "./TagsGamePage";

const GamePage = ({
  gameData,
  gameScreenshots,
}: {
  gameData: GameInfo;
  gameScreenshots: GameScreenshots[];
}) => {
  console.log("🚀 ~ gameScreenshots:", gameScreenshots);
  console.log(gameData.tags);

  return (
    <Grid container justifyContent={"center"} marginY={8} px={2}>
      <Grid item className=" space-y-8" maxWidth={"1200px"}>
        {/* tittle */}
        <Typography variant="h1" textAlign={"center"}>
          {gameData.name}
        </Typography>

        {/* carousel */}

        {/* chips for release date, playtime and platforms */}
        <ChipsGamePage
          releaseDate={gameData.released}
          platforms={gameData.parent_platforms}
          playtime={gameData.playtime}
        />

        {/* game description */}
        <DescriptionGamePage gameDescription={gameData.description} />

        {/* information columns */}
        <Stack
          display={"grid"}
          gridTemplateColumns={"repeat(2, minmax(0, 1fr))"}
          maxWidth={"600px"}
        >
          {/* esrb rating */}
          {
            <DetailsGamePage
              title="Age rating"
              text={
                gameData.esrb_rating ? gameData.esrb_rating.name : undefined
              }
            />
          }

          {/* metascore */}
          <MetascoreDetailsGamePage metascore={gameData.metacritic} />

          {/* platforms */}
          <ArrayDetails title="Platforms" platforms={gameData.platforms} />

          {/* genres */}
          <ArrayDetails title="Genres" genres={gameData.genres} />
        </Stack>

        {/* tags */}
        <TagsGamePage tags={gameData.tags} />
      </Grid>
    </Grid>
  );
};

export default GamePage;
