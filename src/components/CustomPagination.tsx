import { Pagination } from "@mui/material";

const CustomPagination = ({
  setPageNumber,
  searchCount,
}: {
  setPageNumber: (value: number) => void;
  searchCount: number | undefined;
}) => {
  let numberOfPages;
  if (searchCount) {
    numberOfPages = Math.ceil(searchCount / 32);
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
      {numberOfPages && numberOfPages > 1 && (
        <Pagination
          count={numberOfPages}
          variant="outlined"
          shape="rounded"
          color="primary"
          className="flex w-full justify-center"
          onChange={(_, page) => {
            setPageNumber(page);
            scrollToTop();
          }}
          siblingCount={windowsWidth > 500 ? 2 : 0}
        />
      )}
    </>
  );
};

export default CustomPagination;
