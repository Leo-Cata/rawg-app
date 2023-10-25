import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { SetSearch } from "../Types/Types";

const SearchBar = ({ setGameSearchString }: SetSearch) => {
  // searchString for displaying the value and setting setSearch
  const [searchString, setSearchString] = useState<string>("");

  // handle the input value changing and setting
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // prevents from reloading when hitting enter
    event.preventDefault();

    // if its a change event, setSearchString to the value, else if its a submit setSearch
    if (event.type === "change") {
      setSearchString(event.target.value);
    } else if (event.type === "submit") {
      setGameSearchString(searchString);
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
            onClick={() => setGameSearchString(searchString)}
            onTouchEnd={() => setGameSearchString(searchString)}
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
