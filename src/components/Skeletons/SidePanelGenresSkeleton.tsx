import { Skeleton } from "@mui/material";

const SidePanelGenresSkeleton = () => {
  return (
    <div className="mb-4 flex flex-col lg:block lg:max-w-[160px]">
      <Skeleton className="mx-2 my-4 h-7 w-36 transform-none self-center" />

      <div className="flex h-fit w-full overflow-y-auto lg:block lg:max-w-[160px]">
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
