import { Stack, Typography } from "@mui/material";
const NotFound = () => {
  return (
    <Stack width={"100%"} height={"100dvh"} alignItems={"center"} paddingX={2}>
      <div className="flex items-center">
        <Typography variant="h2" className="mr-7 text-[8rem]">
          4
        </Typography>
        <img src="/dark-souls-bonfire.gif" alt="dark souls bonfire gif" />
        <Typography variant="h2" className="text-[8rem]">
          4
        </Typography>
      </div>
      <Typography variant="h2">
        Page not found, stay a while and rest.
      </Typography>
    </Stack>
  );
};

export default NotFound;
