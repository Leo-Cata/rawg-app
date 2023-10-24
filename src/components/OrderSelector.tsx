import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const OrderSelector = ({
  setOrdering,
  ordering,
}: {
  setOrdering: (value: string) => void;
  ordering: string;
}) => {
  // change ordering state
  const handleChange = (event: SelectChangeEvent) => {
    setOrdering(event.target.value);
  };

  return (
    <FormControl className="max-w-[15rem] bg-custom-cards">
      <InputLabel
        id="ordering-selector-label"
        className="capitalize text-white"
      >
        Order
      </InputLabel>
      <Select
        label="order"
        labelId="ordering-selector-label"
        id="orderingSelector"
        value={ordering}
        onChange={handleChange}
        className="capitalize transition-transform"
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
