// mui components
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// context
import { useContext, useState } from "react";
import { appContext } from "../../context/appContext";
import { SidePanelProps, appContextValues } from "../../Types/Types";
import { IoMdArrowDropup } from "react-icons/io";

const SidePanelGenres = ({ genreList }: { genreList: SidePanelProps[] }) => {
  // app context
  const { setSearchGenres, searchGenres } = useContext(
    appContext,
  ) as appContextValues;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  //handles selecting and deselecting genre
  const handleGenreSelector = (id: number) => {
    if (id === searchGenres) {
      setSearchGenres(undefined);
    } else {
      setSearchGenres(id);
    }
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Stack className="mb-4 px-4 lg:px-1">
      <Paper className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <button onClick={handleOpen} className="flex lg:px-4">
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            fontWeight={"600"}
          >
            Genres
          </Typography>
          <IoMdArrowDropup
            size="20px"
            className={`ml-2 transition-all duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <List
          className={`flex w-full overflow-y-auto py-0 transition-all duration-500 lg:block lg:max-w-[200px] lg:flex-col ${
            isOpen
              ? "flex opacity-100 lg:h-fit"
              : " hidden opacity-30 lg:flex lg:h-28 lg:overflow-y-hidden"
          }`}
        >
          {genreList &&
            genreList.map((genre) => (
              <ListItem
                key={genre.slug}
                className={`rounded-md p-0 ${
                  searchGenres === genre.id ? "bg-[#512b814d]" : ""
                }`}
              >
                <ListItemButton
                  className={isOpen ? "" : "hover:bg-transparent"}
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
      </Paper>
    </Stack>
  );
};

export default SidePanelGenres;
