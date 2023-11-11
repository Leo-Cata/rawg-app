import {
  Paper,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
// icons
import { AiOutlineMore } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { ProfileData } from "../Types/Types";
import { useState } from "react";
import { deleteSavedGames } from "../Firebase/DeleteSavedGames";
import { deleteAccount } from "../Firebase/DeleteAccount";

const Profile = ({
  userPhoto,
  userDisplayName,
  savedGamesLength,
  userId,
}: ProfileData) => {
  // gets anchor element
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  //turns state into boolean
  const openMenu = Boolean(anchorElement);

  // sets the anchor element to whatever we click on
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  // sets the anchor element to null
  const handleClose = () => {
    setAnchorElement(null);
  };
  // waits for deleteSavedGames to run and then reload
  const handleDeleteGames = async () => {
    await deleteSavedGames(userId);
    window.location.reload();
  };

  //if handleUserId await to delete account, the logout then reload
  const handleDeleteAccount = async () => {
    await deleteAccount(userId);
    window.location.reload();
  };

  return (
    <>
      <Paper className="mx-2 flex w-full max-w-[500px] flex-col items-center p-4">
        <IconButton
          className="self-end p-0"
          onClick={handleMenu}
          aria-controls={openMenu ? "account-settings" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
        >
          <AiOutlineMore />
        </IconButton>
        <Avatar
          src={userPhoto ? userPhoto : ""}
          alt={`${userDisplayName} profileContainer picture`}
          className="flex h-32 w-32"
        />
        <Typography className="py-2" variant="h5">
          {userDisplayName}
        </Typography>
        <Typography variant="body1">
          {savedGamesLength ? savedGamesLength : "0"} Games Backlogged
        </Typography>
      </Paper>

      {/* popup menu */}
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openMenu}
        anchorEl={anchorElement}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem className="space-y-1" onClick={handleDeleteGames}>
          <AiFillStar className=" mr-1 text-yellow-500" /> Delete Saved Games
        </MenuItem>
        <MenuItem className="space-y-1" onClick={handleDeleteAccount}>
          <MdDelete className=" mr-1 text-red-500" /> Delete Account
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
