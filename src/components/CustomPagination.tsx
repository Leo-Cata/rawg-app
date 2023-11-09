import { Pagination } from "@mui/material";
import { PaginationPropsType } from "../Types/Types";

const CustomPagination = ({
  setPageNumber,
  pageNumber,
  itemsCount,
  itemsPerPage,
}: PaginationPropsType) => {
  let numberOfPages = 0;
  if (itemsCount) {
    numberOfPages = Math.ceil(itemsCount / itemsPerPage);
  }

  // gets window width
  const windowsWidth = window.innerWidth;
  return (
    <>
      {numberOfPages > 1 && (
        <Pagination
          count={numberOfPages}
          variant="outlined"
          shape="rounded"
          color="primary"
          className="flex w-full justify-center pb-4"
          onChange={(_, page) => {
            setPageNumber(page);
            console.log(page);
          }}
          page={pageNumber}
          siblingCount={windowsWidth > 500 ? 2 : 0}
        />
      )}
    </>
  );
};

export default CustomPagination;
