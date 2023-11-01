import { Skeleton } from "@mui/material";
import { ItemsPerPage } from "../Types/Types";

const CardsSkeleton = ({ itemsPerPage }: ItemsPerPage) => {
  return (
    <>
      {Array.from({ length: itemsPerPage }, (_, index) => (
        <Skeleton
          key={index}
          className="max-h-[385px] min-h-[320px] min-w-[343px] max-w-[454px] scale-100"
        />
      ))}
      {/* </div> */}
    </>
  );
};

export default CardsSkeleton;
