import { Stack, Typography } from "@mui/material";

const GamesNotFound = () => {
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"350px"}
    >
      <img
        src="/dark-souls-bonfire.gif"
        alt="dark souls bonfire gif"
        className="py-2"
      />
      <Typography variant="h4" className="max-w-md font-hyperlegible">
        There's always a lighthouse. There's always a man. There's always a
        city... but there isn't always a result for your search. Try again
      </Typography>
    </Stack>
  );
};

export default GamesNotFound;
