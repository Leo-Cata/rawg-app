import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  ListItemIcon,
  Typography,
  Button,
} from "@mui/material";
import { UserDataType } from "../../Types/Types";
import React, { useState } from "react";
import { signOutGoogle } from "../../Firebase/SignOutOfGoogle";
import { FcGoogle } from "react-icons/fc";
import { signInGoogle } from "../../Firebase/SignInWithGoogle";
import { Link } from "react-router-dom";

import { PiSignOutBold, PiUserBold, PiFlowerLotus } from "react-icons/pi";

import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";

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

  const [holdValue, setHoldValue] = useState("");

  return (
    <>
      <AppBar position="static" className="mb-4" component={"nav"}>
        <Toolbar className="flex justify-between space-x-4 p-2">
          <Link to={"/"} className="flex w-fit items-center">
            {/* icon */}
            <IconButton className="p-1">
              <PiFlowerLotus className="text-5xl text-custom-secondary" />
            </IconButton>

            {/* site name */}
            <Typography className="w-fit cursor-pointer pt-1" fontWeight={600}>
              Backlogged
            </Typography>
          </Link>

          {/* desktop search bar */}
          <div className="hidden w-full max-w-fit sm:block sm:max-w-[20rem] lg:max-w-[40rem]">
            <SearchBar holdValue={holdValue} setHoldValue={setHoldValue} />
          </div>

          {/* mobile search bar */}
          <div className="block sm:hidden">
            <MobileSearchBar
              holdValue={holdValue}
              setHoldValue={setHoldValue}
            />
          </div>

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
            <Button
              variant="text"
              color="info"
              className="text-md font-bold capitalize"
              onClick={() => handleUserId && signInGoogle(handleUserId)}
            >
              Sign In With <FcGoogle className="pl-1" size="24px" />
            </Button>
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
          <Link to={"/profile"} className="flex items-center">
            <ListItemIcon>
              <PiUserBold className="text-lg text-purple-700" />
            </ListItemIcon>
            Profile
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
