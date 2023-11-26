import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { GenresList } from "../Types/Types";

const SidePanelGenres = ({
  genreList,
  setSearchGenre,
}: {
  genreList: GenresList[];
  setSearchGenre: (value: number) => void;
}) => {
  return (
    <Stack component={"aside"}>
      <Typography variant="subtitle1" textAlign={"center"} fontWeight={"600"}>
        Search By Genres
      </Typography>
      <List className="w-full max-w-[160px]">
        {genreList &&
          genreList.map((genre) => (
            <ListItem key={genre.slug} className="p-0">
              <ListItemButton
                className="rounded-sm"
                onClick={() => setSearchGenre(genre.id)}
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
