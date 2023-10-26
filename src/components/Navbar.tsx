import {
  AppBar,
  Avatar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { UserDataType } from "../Types/Types";
import React, { useState } from "react";
import { signOutGoogle } from "../Firebase/SignOutOfGoogle";
import GoogleButton from "react-google-button";
import { signInGoogle } from "../Firebase/SignInWithGoogle";

const Navbar = ({ userDisplayName, userPhoto, handleUserId }: UserDataType) => {
  // state to set the element
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  //turns anchorElement to a boolean, if there is an anchorElement then its true
  const openMenu = Boolean(anchorElement);

  // sets the anchor element to whatever we click on
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  // sets the anchor element to null
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <>
      <AppBar position="static" className="mb-4">
        <Toolbar className="flex justify-end">
          {userDisplayName ? (
            <IconButton
              onClick={handleMenu}
              aria-controls={openMenu ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
            >
              <Avatar src={userPhoto ? userPhoto : ""} />
            </IconButton>
          ) : (
            <GoogleButton
              onClick={() => handleUserId && signInGoogle(handleUserId)}
            />
          )}
        </Toolbar>
      </AppBar>
      <Menu open={openMenu} anchorEl={anchorElement} onClose={handleClose}>
        <MenuItem onClick={handleClose}>{userDisplayName}</MenuItem>
        <MenuItem onClick={handleClose}>
          <Button onClick={() => handleUserId && signOutGoogle(handleUserId)}>
            Log Out
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
