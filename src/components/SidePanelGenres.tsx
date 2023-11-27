import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { GenreProps } from "../Types/Types";

const SidePanelGenres = ({
  genreList,
  setSearchGenre,
  searchGenre,
}: GenreProps) => {
  //handles selecting and deselecting genre
  const handleGenreSelector = (id: number) => {
    if (id === searchGenre) {
      setSearchGenre(undefined);
    } else {
      setSearchGenre(id);
    }
  };

  return (
    <Stack component={"aside"} className="mb-4">
      <Typography variant="subtitle1" textAlign={"center"} fontWeight={"600"}>
        Search By Genres
      </Typography>
      <List className="flex h-fit w-full overflow-y-auto lg:block lg:max-w-[160px]">
        {genreList &&
          genreList.map((genre) => (
            <ListItem
              key={genre.slug}
              className={`rounded-md p-0 ${
                searchGenre === genre.id ? "bg-[#512b814d]" : ""
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
