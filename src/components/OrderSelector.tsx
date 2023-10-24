import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";

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

  // if pressing on the same element, add - to reverse the order
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // tells typescript to take this as an HTML li Element
    const target = event.target as HTMLLIElement;
    if (ordering === target.innerText) {
      setOrdering(`-${ordering}`);
    }
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
        className="capitalize"
        onClick={handleClick}
      >
        <MenuItem value="relevance">relevance</MenuItem>
        <MenuItem value="name">name</MenuItem>
        <MenuItem value="released">released</MenuItem>
        <MenuItem value="added">added</MenuItem>
        <MenuItem value="created">created</MenuItem>
        <MenuItem value="updated">updated</MenuItem>
        <MenuItem value="rating">rating</MenuItem>
        <MenuItem value="-metacritic">metacritic</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderSelector;
