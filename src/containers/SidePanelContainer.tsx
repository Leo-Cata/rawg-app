import { useEffect, useState } from "react";
import { getGenresList } from "../services/RawgApi";
import { GenresList } from "../Types/Types";
import SidePanelGenres from "../components/SidePanel/SidePanelGenres";
import SidePanelGenresSkeleton from "../components/Skeletons/SidePanelGenresSkeleton";
import SidePanelYears from "../components/SidePanel/SidePanelYears";

const SidePanelContainer = () => {
  // saves list of genres
  const [genreList, setGenreList] = useState<GenresList[] | undefined>();

  // fetches the list of genres and saves them
  useEffect(() => {
    const gamesGenresList = async () => {
      const resp = await getGenresList();
      setGenreList(resp.data.results);
    };
    gamesGenresList();
  }, []);

  return (
    <aside>
      {genreList ? (
        <div className="flex max-h-[900px] flex-col overflow-y-auto overflow-x-hidden">
          <SidePanelGenres genreList={genreList} />
          <SidePanelYears />
        </div>
      ) : (
        <SidePanelGenresSkeleton />
      )}
    </aside>
  );
};

export default SidePanelContainer;
