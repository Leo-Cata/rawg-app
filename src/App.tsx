import { signInGoogle } from "./Firebase/Firebase";

const App = () => {
  return (
    <div>
      <button onClick={signInGoogle}>sign in</button>
    </div>
  );
};

export default App;
