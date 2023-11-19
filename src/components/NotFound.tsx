import { Stack, Typography, Box } from "@mui/material";
import { GameQuote } from "../Types/Types";

const NotFound = ({ gameQuote }: { gameQuote: GameQuote | undefined }) => {
  return (
    <Stack
      width={"100%"}
      height={"100dvh"}
      alignItems={"center"}
      paddingX={2}
      className="py-36"
    >
      <div className="flex items-baseline justify-center">
        <Typography variant="h2" className="mr-1.5 text-[9rem]">
          4
        </Typography>
        <img
          src="/dark-souls-bonfire.gif"
          alt="dark souls bonfire gif"
          className="h-fit w-20"
        />
        <Typography variant="h2" className="text-[9rem]">
          4
        </Typography>
      </div>
      <Typography variant="h3">Page not found</Typography>

      {/* quote */}
      {gameQuote && (
        <Box py={10} maxWidth={"325px"}>
          <Typography variant="h6" className="font-hyperlegible">
            "{gameQuote?.quote}"
          </Typography>
          <Typography variant="subtitle1" className="font-hyperlegible">
            -{gameQuote?.character}, {gameQuote?.title}.
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default NotFound;
