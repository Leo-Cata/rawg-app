import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { SetSearch } from "../Types/Types";

const SearchBar = ({ setSearch }: SetSearch) => {
  const [searchString, setSearchString] = useState<string>("");

  // handle the input value changing and setting
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.type === "change") {
      setSearchString(event.target.value);
    } else if (event.type === "submit") {
      setSearch(searchString);
    }
  };

  return (
    <TextField
      component="form"
      onChange={handleChange}
      onSubmit={handleChange}
      value={searchString}
      placeholder="Search For A Game"
      variant="filled"
      className="w-full bg-[#ffffff]"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
