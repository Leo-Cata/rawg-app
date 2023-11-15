// mui component
import { Typography } from "@mui/material";

// library to clean the HTML
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
        className="font-hyperlegible max-w-[1200px]"
        variant="h5"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
};

export default DescriptionGamePage;
