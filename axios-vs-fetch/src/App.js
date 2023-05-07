import "./App.css";
import LoadUsers from "./Components";
import LoadUsersWithLoadHook from "./Components/LoadUsersWithLoadHook";

function App() {

  return (
    <>
      {/* <LoadUsers /> */}
      <LoadUsersWithLoadHook></LoadUsersWithLoadHook>
      {/* <h2>Load data With Fetch</h2> */}
    </>
  );
}

export default App;
