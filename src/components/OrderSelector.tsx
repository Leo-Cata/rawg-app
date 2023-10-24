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
    console.log("asd");
    setOrdering(event.target.value);
  };

  // // if pressing on the same element, add - to reverse the order
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   console.log("dsa");
  //   // tells typescript to take this as an HTML li Element
  //   const target = event.target as HTMLLIElement;

  //   if (ordering === target.innerText) {
  //     setOrdering(`-${ordering}`);
  //   } else {
  //     setOrdering(target.innerText);
  //   }
  // };

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
        // onClick={handleClick}
        // startAdornment={
        //   <ArrowUpwardIcon
        //     className={`${
        //       ordering.includes("-") ? "rotate-180 " : " "
        //     } transition-transform duration-300`}
        //     fontSize="small"
        //   />
        // }
      >
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="-released">New</MenuItem>
        {/* <MenuItem value="-added">Added</MenuItem> */}
        {/* <MenuItem value="created">Created</MenuItem> */}
        {/* <MenuItem value="-updated">Updated</MenuItem> */}
        {/* <MenuItem value="-rating">Rating</MenuItem> */}
        <MenuItem value="-metacritic">Metacritic</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderSelector;
