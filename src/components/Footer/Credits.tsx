import { Link, Stack, Typography } from "@mui/material";

const Credits = () => {
  return (
    <Stack
      width={"100%"}
      className="flex flex-col justify-evenly space-y-1 sm:flex-row sm:items-end"
    >
      {/* rawg */}
      <Typography variant="subtitle1">
        All Data Provided by {""}
        <Link
          alignItems={"center"}
          justifyContent={"center"}
          className="font-bold text-blue-400 no-underline decoration-blue-400 hover:underline"
          href="https://rawg.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          RAWG
        </Link>
      </Typography>

      {/* icon */}
      <Link
        href="https://www.flaticon.com/free-icons/lotus"
        title="lotus icons"
        rel="noopener noreferrer"
        target="_blank"
        className="text-white hover:text-blue-400 hover:underline"
      >
        <Typography variant="subtitle1">
          Lotus icon logo created by Hexagon075 - Flaticon
        </Typography>
      </Link>
    </Stack>
  );
};

export default Credits;
