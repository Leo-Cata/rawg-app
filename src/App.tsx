import GamesContainer from "./containers/GamesContainer";
// import { signInGoogle } from "./firebase/Firebase";

// import { db } from "./Firebase/Database";
// import { resp, signInGoogle, signOutGoogle } from "./Firebase/Firebase";

// const App = () => {
//   return (
//     <div>
//       <button onClick={signInGoogle} className="bg-purple-700">
//         sign in
//       </button>
//       <button onClick={signOutGoogle}>sign out</button>
//       <button onClick={() => console.log(db, resp)}>resp</button>

const App = () => {
  return (
    <div className="flex-grow bg-[#070703] px-4 py-10">
      {/* <button onClick={signInGoogle}>sign in</button> */}
      <GamesContainer />
    </div>
  );
};

export default App;
