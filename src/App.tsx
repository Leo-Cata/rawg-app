import GamesContainer from "./containers/GamesContainer";
import { signInGoogle } from "./firebase/Firebase";
// import { fetchGames } from "./services/RawgApi";

const App = () => {
  return (
    <div className="bg-purple-500">
      <button onClick={signInGoogle}>sign in</button>
      <GamesContainer />
    </div>
  );
};

export default App;
