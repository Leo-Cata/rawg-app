import { Pagination } from "@mui/material";
import { PaginationPropsType } from "../Types/Types";

const CustomPagination = ({
  setPageNumber,
  itemsCount,
  itemsPerPage,
}: PaginationPropsType) => {
  let numberOfPages = 0;
  if (itemsCount) {
    numberOfPages = Math.ceil(itemsCount / itemsPerPage);
  }

  // gets window width
  const windowsWidth = window.innerWidth;

  const scrollToTop = () => {
    //must be written this way because window.scroll does not work when routing
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            scrollToTop();
            setPageNumber(page);
          }}
          siblingCount={windowsWidth > 500 ? 2 : 0}
        />
      )}
    </>
  );
};

export default CustomPagination;
