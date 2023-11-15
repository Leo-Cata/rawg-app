// mui component and icon
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//react hooks
import { ChangeEvent, useState } from "react";

// router dom hook
import { useNavigate } from "react-router-dom";

const SearchBar = ({
  holdValue,
  setHoldValue,
}: {
  holdValue: string;
  setHoldValue: (value: string) => void;
}) => {
  // navigation
  const nav = useNavigate();
  // searchString for displaying the value and setting setSearch
  const [searchString, setSearchString] = useState<string>("");

  // handle the input value changing and setting
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // prevents from reloading when hitting enter
    event.preventDefault();

    // if its a change event, setSearchString to the value, else if its a submit navs to searchString
    if (event.type === "change") {
      // set the search string
      setSearchString(event.target.value);

      // sets the value to hold for mobile
      setHoldValue(event.target.value);
    } else if (event.type === "submit") {
      // if there is a string search, else go to main page
      if (searchString) {
        nav(`/search/${searchString}`);
      } else nav("/");
    }
  };

  return (
    <TextField
      component={"form"}
      onChange={handleChange}
      onSubmit={handleChange}
      value={holdValue ? holdValue : searchString}
      placeholder="Search For A Game"
      variant="standard"
      className="w-full flex-grow px-2 "
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={() => setSearchString(searchString)}
            onTouchEnd={() => setSearchString(searchString)}
            className="cursor-pointer text-white"
          >
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
