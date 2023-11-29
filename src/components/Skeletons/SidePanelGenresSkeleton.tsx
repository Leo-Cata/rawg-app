import { Skeleton } from "@mui/material";

const SidePanelGenresSkeleton = () => {
  // width must be 179 because for some reason that makes it match the width of the rendered side panels

  return (
    <Skeleton className="mx-4 mb-2 h-7 transform-none rounded-md lg:mx-1 lg:w-[179px]" />
  );
};

export default SidePanelGenresSkeleton;
