import { db } from "./Firebase/Database";
import { resp, signInGoogle, signOutGoogle } from "./Firebase/Firebase";

const App = () => {
  return (
    <div>
      <button onClick={signInGoogle} className="bg-purple-700">
        sign in
      </button>
      <button onClick={signOutGoogle}>sign out</button>
      <button onClick={() => console.log(db, resp)}>resp</button>
    </div>
  );
};

export default App;
