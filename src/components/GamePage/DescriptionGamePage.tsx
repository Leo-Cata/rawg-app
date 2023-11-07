import { Typography } from "@mui/material";
import DOMPurify from "dompurify";

const DescriptionGamePage = ({
  gameDescription,
}: {
  gameDescription: string;
}) => {
  // sanitizes dom elements
  const sanitizedHTML = DOMPurify.sanitize(gameDescription);
  return (
    <div className="space-y-2">
      <Typography variant="h3" className="font-bold text-white/40">
        About
      </Typography>
      <Typography
        className="max-w-[1200px]"
        variant="h6"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
};

export default DescriptionGamePage;
