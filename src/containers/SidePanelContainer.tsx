import { useEffect, useState } from "react";
import { getGenresList } from "../services/RawgApi";
import { GenreProps, GenresList } from "../Types/Types";
import SidePanelGenres from "../components/SidePanelGenres";

const SidePanelContainer = ({ setSearchGenre, searchGenre }: GenreProps) => {
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
    <>
      {genreList && (
        <SidePanelGenres
          genreList={genreList}
          setSearchGenre={setSearchGenre}
          searchGenre={searchGenre}
        />
      )}
    </>
  );
};

export default SidePanelContainer;
