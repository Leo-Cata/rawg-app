import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";

const OrderSelector = ({
  setGamesOrdering,
  gamesOrdering,
}: {
  setGamesOrdering: (value: string) => void;
  gamesOrdering: string;
}) => {
  // change ordering state
  const handleChange = (event: SelectChangeEvent) => {
    setGamesOrdering(event.target.value);
  };

  return (
    <FormControl className="w-full max-w-[20rem]">
      <InputLabel id="ordering-selector-label" className="capitalize">
        Order
      </InputLabel>
      <Select
        label="order"
        labelId="ordering-selector-label"
        id="orderingSelector"
        value={gamesOrdering}
        onChange={handleChange}
        className="capitalize"
      >
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="-released">Release Date</MenuItem>
        <MenuItem value="-metacritic">Metacritic</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderSelector;
