// react hooks
import React, { useState } from "react";

// mui components and icons
import { IconButton, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//search bar component
import SearchBar from "./SearchBar";

const MobileSearchBar = () => {
  // state to set the element
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  // turn anchorElement to a boolean
  const openMenu = Boolean(anchorElement);

  // sets the anchor to the element clicked
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  // sets the anchor to null, thus closing the menu
  const handleClose = () => {
    setAnchorElement(null);
  };

  // state to hold the value of the search string on mobile
  const [holdValue, setHoldValue] = useState("");

  return (
    <>
      {/* button that opens the menu */}
      <IconButton
        onClick={handleMenu}
        aria-controls={openMenu ? "search-bar" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu}
      >
        <SearchIcon />
      </IconButton>

      {/* menu */}
      <Menu
        open={openMenu}
        anchorEl={anchorElement}
        onClose={handleClose}
        onSubmit={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SearchBar holdValue={holdValue} setHoldValue={setHoldValue} />
      </Menu>
    </>
  );
};

export default MobileSearchBar;
