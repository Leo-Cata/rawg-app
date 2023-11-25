// mui component
import { Skeleton } from "@mui/material";

//type
import { ItemsPerPage } from "../../Types/Types";

const CardsSkeleton = ({ itemsPerPage }: ItemsPerPage) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: itemsPerPage }, (_, index) => (
        <Skeleton
          key={index}
          className="max-h-[385px] min-h-[320px] w-full scale-100 sm:max-w-[454px]"
        />
      ))}
    </div>
  );
};

export default CardsSkeleton;
