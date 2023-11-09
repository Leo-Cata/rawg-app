import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
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
      setSearchString(event.target.value);
    } else if (event.type === "submit") {
      nav(`/search/${searchString}`);
    }
  };
  return (
    <TextField
      component={"form"}
      onChange={handleChange}
      onSubmit={handleChange}
      value={searchString}
      placeholder="Search For A Game"
      variant="filled"
      className="my-4 flex-grow sm:my-0 sm:max-w-[50rem]"
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
