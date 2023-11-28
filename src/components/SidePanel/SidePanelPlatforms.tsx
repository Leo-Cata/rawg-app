// mui components
import {
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// context
import { useContext, useState } from "react";
import { appContext } from "../../context/appContext";

//types
import { SidePanelProps, appContextValues } from "../../Types/Types";

//icon
import { IoMdArrowDropup } from "react-icons/io";

const SidePanelPlatforms = ({
  platformsList,
}: {
  platformsList: SidePanelProps[];
}) => {
  //context
  const { searchPlatforms, setSearchPlatforms } = useContext(
    appContext,
  ) as appContextValues;

  //handles opening and scrolling the component
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  //handles platform setter
  const handlePlatform = (value: number) => {
    if (value === searchPlatforms) {
      setSearchPlatforms(undefined);
    } else {
      setSearchPlatforms(value);
    }
  };

  return (
    <Stack className="mb-4 px-4 lg:px-1">
      <Paper className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <button className="flex lg:px-4" onClick={handleOpen}>
          <Typography variant="subtitle1" textAlign={"center"} fontWeight={600}>
            Platforms
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
          {platformsList.map((platform) => (
            <ListItem
              key={platform.name}
              className={`rounded-md p-0 ${
                searchPlatforms === platform.id ? "bg-[#512b814d]" : ""
              }`}
            >
              <ListItemButton
                className={isOpen ? "" : "hover:bg-transparent"}
                onClick={() => handlePlatform(platform.id)}
              >
                <Typography variant="subtitle2">{platform.name}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Stack>
  );
};

export default SidePanelPlatforms;
