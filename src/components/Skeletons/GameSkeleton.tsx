import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";

const GameSkeleton = () => {
  return (
    <Stack my={8} px={2} alignItems={"center"}>
      <Skeleton className="h-[1250px] w-full max-w-[1200px] transform-none" />
    </Stack>
  );
};

export default GameSkeleton;
