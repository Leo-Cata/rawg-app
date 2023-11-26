import { useEffect, useState } from "react";
import { getGenresList } from "../services/RawgApi";
import { GenresList } from "../Types/Types";
import SidePanelGenres from "../components/SidePanelGenres";

const SidePanelContainer = ({
  setSearchGenre,
}: {
  setSearchGenre: (value: number) => void;
}) => {
  const [genreList, setGenreList] = useState<GenresList[] | undefined>();

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
        />
      )}
    </>
  );
};

export default SidePanelContainer;
