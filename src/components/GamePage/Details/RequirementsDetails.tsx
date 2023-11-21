import { Box, Typography } from "@mui/material";
import TitleDetails from "./TitleDetails";
import { requirementsFormatter } from "../../../utils/RequirementsFormatter";

const RequirementsDetails = ({
  text,
  title,
}: {
  text: string;
  title: string;
}) => {
  const requirementsText = requirementsFormatter(text);
  return (
    <Box marginTop={0.5}>
      <TitleDetails title={title} />
      <Typography
        variant="subtitle1"
        dangerouslySetInnerHTML={{ __html: requirementsText }}
      />
    </Box>
  );
};

export default RequirementsDetails;
