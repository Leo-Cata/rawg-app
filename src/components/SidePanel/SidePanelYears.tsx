// context
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import { appContextValues } from "../../Types/Types";

//mui components
import {
  List,
  Stack,
  Typography,
  ListItem,
  ListItemButton,
} from "@mui/material";

const SidePanelYears = () => {
  const { searchDates, setSearchDates } = useContext(
    appContext,
  ) as appContextValues;

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
    <Stack className="mb-4">
      <Typography variant="subtitle1" textAlign={"center"} fontWeight={"600"}>
        Best By Years
      </Typography>
      <List className="flex h-fit w-full overflow-y-auto lg:block lg:max-w-[200px]">
        {dates.map((date) => (
          <ListItem
            className={`rounded-md p-0 ${
              searchDates === date.dates ? "bg-[#512b814d]" : ""
            }`}
          >
            <ListItemButton onClick={() => setSearchDates(date.dates)}>
              {date.year}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default SidePanelYears;
