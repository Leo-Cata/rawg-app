import { Box, Typography, Chip } from "@mui/material";
import TitleDetails from "./TitleDetails";

const MetascoreDetailsGamePage = ({ metascore }: { metascore: number }) => {
  return (
    <Box>
      <TitleDetails title="Metascore" />
      {metascore ? (
        <Chip
          label={metascore}
          color="success"
          variant="outlined"
          className=" font-hyperlegible my-1"
        />
      ) : (
        <Typography>Not Found</Typography>
      )}
    </Box>
  );
};

export default MetascoreDetailsGamePage;
