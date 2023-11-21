// types
import { GameInfo, GameScreenshots } from "../../Types/Types";

// mui components
import { Grid, Typography, Stack } from "@mui/material";

// components
import DetailsGamePage from "./Details/DetailsGamePage";
import ChipsBookmarkGamePage from "./ChipsBookmarkGamePage";
import DescriptionGamePage from "./DescriptionGamePage";
import MetascoreDetailsGamePage from "./Details/MetascoreDetailsGamePage";
import ArrayDetails from "./Details/ArrayDetails";
import TagsGamePage from "./TagsGamePage";
import ImageGamePage from "./ImageGamePage";
import CarouselGamePage from "./CarouselGamePage";

// router hook to get state from the url
import { useLocation } from "react-router-dom";
import RequirementsDetails from "./Details/RequirementsDetails";

const GamePage = ({
  gameData,
  gameScreenshots,
}: {
  gameData: GameInfo;
  gameScreenshots: GameScreenshots[];
}) => {
  // gets the state to check if the game is in favorite
  const { state } = useLocation();

  // check if the game is available in pc
  const availablePc = gameData.platforms.find(
    (platformsArray) => platformsArray.platform.id === 4,
  );

  return (
    <Grid container justifyContent={"center"} marginY={8} px={2}>
      <Grid item maxWidth={"1200px"} width={"100%"} className="space-y-8">
        {/* tittle */}
        <Typography variant="h1" textAlign={"center"}>
          {gameData.name}
        </Typography>

        <ImageGamePage
          background_image={gameData.background_image}
          name={gameData.name}
        />

        {/* chips for release date, playtime, platforms and to add to favorites */}
        <ChipsBookmarkGamePage
          released={gameData.released}
          playtime={gameData.playtime}
          background_image={gameData.background_image}
          parent_platforms={gameData.parent_platforms}
          metacritic={gameData.metacritic}
          name={gameData.name}
          slug={gameData.slug}
          isInFavorite={state}
        />
        {/* game description */}
        <DescriptionGamePage gameDescription={gameData.description} />

        {/* carousel */}
        <CarouselGamePage gameScreenshots={gameScreenshots} />

        {/* information columns */}
        <div>
          <Stack
            display={"grid"}
            gridTemplateColumns={"repeat(2, minmax(0, 1fr))"}
            maxWidth={"600px"}
          >
            {/* esrb rating */}

            <DetailsGamePage
              title="Age rating"
              text={
                gameData.esrb_rating ? gameData.esrb_rating.name : undefined
              }
            />

            {/* metascore */}
            <MetascoreDetailsGamePage metascore={gameData.metacritic} />

            {/* platforms */}
            <ArrayDetails title="Platforms" platforms={gameData.platforms} />

            {/* genres */}
            <ArrayDetails title="Genres" tags={gameData.genres} />

            {/* developers */}
            <ArrayDetails title="Developers" tags={gameData.developers} />

            {/* publishers */}
            <ArrayDetails title="Publishers" tags={gameData.publishers} />
          </Stack>

          {/* tags */}
          <TagsGamePage tags={gameData.tags} />

          {/* pc requirements */}
          {availablePc && (
            <>
              <RequirementsDetails
                title="Minimum Pc Specs"
                text={availablePc.requirements.minimum}
              />
              <RequirementsDetails
                title="Recommended Pc Specs"
                text={availablePc.requirements.recommended}
              />
            </>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default GamePage;
