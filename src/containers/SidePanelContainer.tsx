import { useEffect, useState, useContext } from "react";
import { getGenresList, getPlatformsLists } from "../services/RawgApi";
import { SidePanelObject, appContextValues } from "../Types/Types";
import SidePanelGenresSkeleton from "../components/Skeletons/SidePanelGenresSkeleton";
import CustomSidePanel from "../components/CustomSidePanel";
import { appContext } from "../context/appContext";

const SidePanelContainer = () => {
  // context states and setters
  const {
    searchGenres,
    setSearchGenres,
    searchPlatforms,
    setSearchPlatforms,
    searchDates,
    setSearchDates,
  } = useContext(appContext) as appContextValues;

  // saves list of genres
  const [genreList, setGenreList] = useState<SidePanelObject[] | undefined>();

  // saves platforms
  const [platformsList, setPlatformsList] = useState<
    SidePanelObject[] | undefined
  >();

  // fetches the list of genres and saves them
  useEffect(() => {
    const gamesGenresList = async () => {
      const resp = await getGenresList();
      setGenreList(resp.data.results);
    };
    gamesGenresList();
  }, []);

  //fetches platforms
  useEffect(() => {
    const gamesPlatforms = async () => {
      const resp = await getPlatformsLists();
      setPlatformsList(resp.data.results);
    };

    gamesPlatforms();
  }, []);

  // dates array
  const dates = [
    { name: "2023", id: "2023-01-01,2023-12-31" },
    { name: "2022", id: "2022-01-01,2022-12-31" },
    { name: "2021", id: "2021-01-01,2021-12-31" },
    { name: "2020", id: "2020-01-01,2020-12-31" },
    { name: "2019", id: "2019-01-01,2019-12-31" },
    { name: "2018", id: "2018-01-01,2018-12-31" },
    { name: "2017", id: "2017-01-01,2017-12-31" },
    { name: "2016", id: "2016-01-01,2016-12-31" },
    { name: "2015", id: "2015-01-01,2015-12-31" },
    { name: "2014", id: "2014-01-01,2014-12-31" },
    { name: "2013", id: "2013-01-01,2013-12-31" },
    { name: "2012", id: "2012-01-01,2012-12-31" },
    { name: "2011", id: "2011-01-01,2011-12-31" },
    { name: "2010", id: "2010-01-01,2010-12-31" },
    { name: "2009", id: "2009-01-01,2009-12-31" },
    { name: "2008", id: "2008-01-01,2008-12-31" },
    { name: "2007", id: "2007-01-01,2007-12-31" },
    { name: "2006", id: "2006-01-01,2006-12-31" },
    { name: "2005", id: "2005-01-01,2005-12-31" },
    { name: "2004", id: "2004-01-01,2004-12-31" },
    { name: "2003", id: "2003-01-01,2003-12-31" },
    { name: "2002", id: "2002-01-01,2002-12-31" },
    { name: "2001", id: "2001-01-01,2001-12-31" },
    { name: "2000", id: "2000-01-01,2000-12-31" },
  ];

  return (
    <aside>
      {genreList && platformsList ? (
        <div className="flex max-h-[900px] flex-col overflow-y-auto overflow-x-hidden">
          {/* genres */}
          <CustomSidePanel
            title="Genres"
            stateValue={searchGenres}
            setStateValue={
              setSearchGenres as (value: number | string | undefined) => void
            }
            objectToMap={genreList}
          />

          {/* platforms */}
          <CustomSidePanel
            title="Platforms"
            stateValue={searchPlatforms}
            setStateValue={
              setSearchPlatforms as (value: number | string | undefined) => void
            }
            objectToMap={platformsList}
          />

          {/* years */}
          <CustomSidePanel
            title="Release Year"
            stateValue={searchDates}
            setStateValue={
              setSearchDates as (value: number | string | undefined) => void
            }
            objectToMap={dates}
          />
        </div>
      ) : (
        <>
          <SidePanelGenresSkeleton />
          <SidePanelGenresSkeleton />
          <SidePanelGenresSkeleton />
        </>
      )}
    </aside>
  );
};

export default SidePanelContainer;
