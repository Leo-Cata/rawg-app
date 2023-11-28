// context
import { useContext, useState } from "react";
import { appContext } from "../../context/appContext";
import { appContextValues } from "../../Types/Types";

//mui components
import {
  List,
  Stack,
  Typography,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";

// arrow icon
import { IoMdArrowDropup } from "react-icons/io";

const SidePanelYears = () => {
  //context
  const { searchDates, setSearchDates } = useContext(
    appContext,
  ) as appContextValues;

  // boolean to open/close menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  //handles selecting year
  const handleYearSelector = (date: string) => {
    if (date === searchDates) {
      setSearchDates(undefined);
    } else {
      setSearchDates(date);
    }
  };

  // dates array
  const dates = [
    { year: 2023, dates: "2023-01-01,2023-12-31" },
    { year: 2022, dates: "2022-01-01,2022-12-31" },
    { year: 2021, dates: "2021-01-01,2021-12-31" },
    { year: 2020, dates: "2020-01-01,2020-12-31" },
    { year: 2019, dates: "2019-01-01,2019-12-31" },
    { year: 2018, dates: "2018-01-01,2018-12-31" },
    { year: 2017, dates: "2017-01-01,2017-12-31" },
    { year: 2016, dates: "2016-01-01,2016-12-31" },
    { year: 2015, dates: "2015-01-01,2015-12-31" },
    { year: 2014, dates: "2014-01-01,2014-12-31" },
    { year: 2013, dates: "2013-01-01,2013-12-31" },
    { year: 2012, dates: "2012-01-01,2012-12-31" },
    { year: 2011, dates: "2011-01-01,2011-12-31" },
    { year: 2010, dates: "2010-01-01,2010-12-31" },
    { year: 2009, dates: "2009-01-01,2009-12-31" },
    { year: 2008, dates: "2008-01-01,2008-12-31" },
    { year: 2007, dates: "2007-01-01,2007-12-31" },
    { year: 2006, dates: "2006-01-01,2006-12-31" },
    { year: 2005, dates: "2005-01-01,2005-12-31" },
    { year: 2004, dates: "2004-01-01,2004-12-31" },
    { year: 2003, dates: "2003-01-01,2003-12-31" },
    { year: 2002, dates: "2002-01-01,2002-12-31" },
    { year: 2001, dates: "2001-01-01,2001-12-31" },
    { year: 2000, dates: "2000-01-01,2000-12-31" },
  ];

  return (
    <Stack className="mb-4 px-4 lg:px-1">
      <Paper className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <button onClick={handleOpen} className="flex lg:px-4">
          <Typography variant="subtitle1" fontWeight={600}>
            By Years
          </Typography>

          <IoMdArrowDropup
            size="20px"
            className={`ml-2 transition-all duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* list with the selectors */}
        <List
          className={`flex w-full overflow-y-auto transition-all duration-500 lg:block lg:max-w-[200px] lg:flex-col ${
            isOpen
              ? "flex opacity-100 lg:h-fit"
              : " hidden opacity-30 lg:flex lg:h-28 lg:overflow-y-hidden"
          }`}
        >
          {dates.map((date) => (
            <ListItem
              key={date.year}
              className={`rounded-md p-0 ${
                searchDates === date.dates ? "bg-[#512b814d]" : ""
              }`}
            >
              <ListItemButton
                className={isOpen ? "" : "hover:bg-transparent"}
                onClick={() => handleYearSelector(date.dates)}
              >
                {date.year}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Stack>
  );
};

export default SidePanelYears;
