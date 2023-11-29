import { useState } from "react";
import { SidePanelProp } from "../Types/Types";
import {
  Paper,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";

const CustomSidePanel = ({
  title,
  stateValue,
  setStateValue,
  objectToMap,
}: SidePanelProp) => {
  // open and close state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //handles setting state
  const handleSetState = (value: number | string) => {
    if (value === stateValue) {
      setStateValue(undefined);
    } else {
      setStateValue(value);
    }
  };

  // handles opening and closing the filters list
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // main container
    <Paper className="mx-4 mb-2 flex max-h-[90px] flex-col items-center justify-center rounded-md lg:mx-1 lg:max-h-fit lg:items-start lg:justify-start">
      {/* button and title */}
      <button
        onClick={handleOpen}
        className="flex w-full items-center justify-center lg:justify-start lg:px-4"
      >
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <IoMdArrowDropdown
          size="20px"
          className={` transition-all duration-[250] ${
            !isOpen && "rotate-180"
          }`}
        />
      </button>

      {/* list container */}
      <List
        className={`flex w-full overflow-y-auto py-0 transition-all duration-500 lg:block lg:max-w-[200px] lg:flex-col ${
          isOpen ? "max-h-[10000px]" : "max-h-0 opacity-10"
        } `}
      >
        {/* list items */}
        {objectToMap?.map((value) => (
          <ListItem key={value.name} className="p-0">
            <ListItemButton
              onClick={() => handleSetState(value.id)}
              className={`my-2 rounded-md py-1 ${
                stateValue === value.id && "bg-custom-hover"
              }`}
            >
              {/* don't show image unless it exist and the length isn't the same as the platforms length */}
              {value.image_background && objectToMap.length !== 50 && (
                <ListItemIcon>
                  <img
                    src={value.image_background}
                    alt={value.name + " image"}
                    className="h-7 w-10 rounded-md object-fill"
                  />
                </ListItemIcon>
              )}

              {/* title */}
              <Typography variant="subtitle2" className="font-hyperlegible">
                {value.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CustomSidePanel;
