// react hooks
import { useState } from "react";

// material components
import { Card, CardContent, Stack, IconButton } from "@mui/material";

// types
import { GameCardsProps } from "../../Types/Types";

// mui icons
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

// firebase function to add and remove data
import { addAndRemoveGames } from "../../Firebase/AddAndRemoveGames";

// components
import CardsMedia from "./CardsMedia";
import CardsPlatforms from "./CardsPlatforms";
import CardsReleaseDate from "./CardsReleaseDate";
import CardsNameAndMetacritic from "./CardsNameAndMetacritic";

const GameCards = ({
  gameImage,
  availablePlatforms,
  metacritic,
  releaseDate,
  gameName,
  userId,
  isInFavorite,
}: GameCardsProps) => {
  // useState to change favorite icon
  const [isFavorite, setIsFavorite] = useState(isInFavorite);

  // function to add important game data to favorites and show visual feedback for favorite games
  const addGames = () => {
    if (userId) {
      addAndRemoveGames(
        {
          gameImage,
          availablePlatforms,
          metacritic,
          releaseDate,
          gameName,
        },
        userId,
      );
      setIsFavorite((prev) => !prev);
    } else {
      return alert("not logged in");
    }
  };
  return (
    <Card className="bg-custom-cards rounded-2xl transition-all hover:scale-105 hover:cursor-pointer">
      {/* images */}
      <CardsMedia gameImage={gameImage} gameName={gameName} />

      <CardContent className="w-full text-white group-hover:pb-0">
        {/* icons */}
        <CardsPlatforms availablePlatforms={availablePlatforms} />

        {/* game name and metacritic */}
        <CardsNameAndMetacritic gameName={gameName} metacritic={metacritic} />

        <Stack direction={"row"} alignItems={"center"}>
          {/* release date */}
          <CardsReleaseDate releaseDate={releaseDate} />

          {/* add to favorite */}
          <IconButton
            aria-label="add to favorite"
            className="p-0 pr-[3px]"
            onClick={() => addGames()}
          >
            {isFavorite ? (
              <StarRoundedIcon className="text-yellow-500" />
            ) : (
              <StarBorderRoundedIcon className="text-yellow-500" />
            )}
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCards;
