// dynamically sets the numbers of Rows for the game cards

export const handleResize = (setNumberOfGroups: (value: number) => void) => {
  const ViewportWidth = window.innerWidth;
  if (ViewportWidth <= 639) {
    setNumberOfGroups(1);
  } else if (ViewportWidth <= 767) {
    setNumberOfGroups(2);
  } else if (ViewportWidth <= 1279) {
    setNumberOfGroups(3);
  } else {
    setNumberOfGroups(4);
  }
};
