import { useEffect, useState } from "react";
import { getGenresList, getPlatformsLists } from "../services/RawgApi";
import { SidePanelProps } from "../Types/Types";
import SidePanelGenres from "../components/SidePanel/SidePanelGenres";
import SidePanelGenresSkeleton from "../components/Skeletons/SidePanelGenresSkeleton";
import SidePanelYears from "../components/SidePanel/SidePanelYears";
import SidePanelPlatforms from "../components/SidePanel/SidePanelPlatforms";

const SidePanelContainer = () => {
  // saves list of genres
  const [genreList, setGenreList] = useState<SidePanelProps[] | undefined>();

  // saves platforms
  const [platformsList, setPlatformsList] = useState<
    SidePanelProps[] | undefined
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

  return (
    <aside>
      {genreList && platformsList ? (
        <div className="flex max-h-[900px] flex-col overflow-y-auto overflow-x-hidden">
          <SidePanelGenres genreList={genreList} />
          <SidePanelPlatforms platformsList={platformsList} />
          <SidePanelYears />
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
