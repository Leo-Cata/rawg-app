import { Skeleton } from "@mui/material";

const SidePanelGenresSkeleton = () => {
  return (
    <div className="mx-4 mb-4 flex flex-col lg:block lg:max-w-[200px]">
      <Skeleton className="h-7 w-full transform-none self-center" />

      <div className="hidden h-fit w-full overflow-y-auto lg:block lg:max-w-[200px]">
        {Array.from({ length: 19 }, (_, index) => (
          <Skeleton
            key={index * 123}
            className="m-2 h-12 min-w-[5rem] transform-none rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default SidePanelGenresSkeleton;
