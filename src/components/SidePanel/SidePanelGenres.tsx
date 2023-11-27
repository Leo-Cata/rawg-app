// mui components
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

// context
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import { GenresList, appContextValues } from "../../Types/Types";

const SidePanelGenres = ({ genreList }: { genreList: GenresList[] }) => {
  // app context
  const { setSearchGenres, searchGenres } = useContext(
    appContext,
  ) as appContextValues;

  //handles selecting and deselecting genre
  const handleGenreSelector = (id: number) => {
    if (id === searchGenres) {
      setSearchGenres(undefined);
    } else {
      setSearchGenres(id);
    }
  };

  return (
    <Stack className="mb-4">
      <Typography variant="subtitle1" textAlign={"center"} fontWeight={"600"}>
        Genres
      </Typography>
      <List className="flex h-fit w-full overflow-y-auto lg:block lg:max-w-[200px]">
        {genreList &&
          genreList.map((genre) => (
            <ListItem
              key={genre.slug}
              className={`rounded-md p-0 ${
                searchGenres === genre.id ? "bg-[#512b814d]" : ""
              }`}
            >
              <ListItemButton
                className="rounded-sm"
                onClick={() => handleGenreSelector(genre.id)}
              >
                <ListItemIcon>
                  <img
                    src={genre.image_background}
                    alt=""
                    className="h-8 w-10 rounded-md object-fill"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={genre.name}
                  className="font-hyperlegible"
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Stack>
  );
};

export default SidePanelGenres;
