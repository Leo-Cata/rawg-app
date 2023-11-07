import { Box, Typography, Chip } from "@mui/material";

const MetascoreDetailsGamePage = ({ metascore }: { metascore: number }) => {
  return (
    <Box className="flex w-fit flex-col">
      <Typography className="text-white/50 underline">Metascore</Typography>
      {metascore ? (
        <Chip
          label={metascore}
          color="success"
          variant="outlined"
          className="self-center"
        />
      ) : (
        <Typography>Not Found</Typography>
      )}
    </Box>
  );
};

export default MetascoreDetailsGamePage;
