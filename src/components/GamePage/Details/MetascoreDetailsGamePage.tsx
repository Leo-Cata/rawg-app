import { Box, Typography, Chip } from "@mui/material";

const MetascoreDetailsGamePage = ({ metascore }: { metascore: number }) => {
  return (
    <Box>
      <Typography className="text-white/50 underline">Metascore</Typography>
      {metascore ? (
        <Chip label={metascore} color="success" variant="outlined" />
      ) : (
        <Typography>Not Found</Typography>
      )}
    </Box>
  );
};

export default MetascoreDetailsGamePage;
