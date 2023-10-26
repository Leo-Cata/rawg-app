import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { UserDataType } from "../Types/Types";
import React, { useState } from "react";
import { signOutGoogle } from "../Firebase/SignOutOfGoogle";
import GoogleButton from "react-google-button";
import { signInGoogle } from "../Firebase/SignInWithGoogle";
import { Link } from "react-router-dom";
// import LogoutIcon from "@mui/icons-material/Logout";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {
  PiSignOutBold,
  PiBookmarksSimpleBold,
  PiFlowerLotus,
} from "react-icons/pi";

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
      <AppBar position="static" className="mb-4" component={"nav"}>
        <Toolbar className="flex justify-between p-2">
          <Link to={"/"} className="flex w-fit items-center">
            {/* icon */}
            <IconButton className="p-1">
              <PiFlowerLotus className="text-5xl text-custom-secondary sm:text-5xl" />
            </IconButton>

            {/* site name */}
            <Typography className="w-fit cursor-pointer" fontWeight={600}>
              Backlogged
            </Typography>
          </Link>

          {/* display sign in with google or account profile pic */}
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
              label="Google Sign In"
              className="ml-2"
              onClick={() => handleUserId && signInGoogle(handleUserId)}
            />
          )}
        </Toolbar>
      </AppBar>

      {/* menu that is shown when pressing on the avatar icon button */}
      <Menu
        open={openMenu}
        anchorEl={anchorElement}
        onClose={handleClose}
        onClick={handleClose}
      >
        {/* saved games */}
        <MenuItem>
          <Link to={"/profile"}>
            <ListItemIcon>
              <PiBookmarksSimpleBold className="text-lg text-yellow-500" />
            </ListItemIcon>
            Saved Games
          </Link>
        </MenuItem>

        {/* sign out */}
        <MenuItem onClick={() => handleUserId && signOutGoogle(handleUserId)}>
          <ListItemIcon className="text-lg">
            <PiSignOutBold />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
