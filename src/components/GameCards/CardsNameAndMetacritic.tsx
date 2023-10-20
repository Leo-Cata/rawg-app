import { Stack, Typography, Tooltip, Chip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const CardsNameAndMetacritic = ({
  gameName,
  metacritic,
}: {
  gameName: string;
  metacritic: number;
}) => {
  return (
    <Stack direction={"row"} alignItems={"center"} className="pb-2">
      <Typography variant="h5" className="flex-grow font-semibold">
        {gameName}
      </Typography>
      <Tooltip
        title="Metacritic Score"
        placement="top"
        TransitionComponent={Zoom}
        arrow
      >
        <Chip
          label={metacritic}
          color="success"
          variant="outlined"
          size="small"
          className="bg=[#388e3c]/10 cursor-default font-semibold"
        />
      </Tooltip>
    </Stack>
  );
};

export default CardsNameAndMetacritic;
