// mui component and effect
import { Stack, Typography, Tooltip, Chip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const CardsNameAndMetacritic = ({
  name,
  metacritic,
}: {
  name: string;
  metacritic: number;
}) => {
  return (
    <Stack direction={"row"} alignItems={"center"} className="pb-2">
      <Typography variant="h5" className="flex-grow font-semibold">
        {name}
      </Typography>
      {metacritic && (
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
            className="cursor-default font-semibold"
          />
        </Tooltip>
      )}
    </Stack>
  );
};

export default CardsNameAndMetacritic;
