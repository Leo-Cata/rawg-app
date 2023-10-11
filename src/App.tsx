import GamesContainer from "./containers/GamesContainer";
// import { signInGoogle } from "./firebase/Firebase";

const App = () => {
  return (
    <div className="flex-grow bg-[#070703] px-4 py-10">
      {/* <button onClick={signInGoogle}>sign in</button> */}
      <GamesContainer />
    </div>
  );
};

export default App;
