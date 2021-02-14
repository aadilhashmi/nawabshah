import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/F-HomePage/Landing";
import { MainBodyReducers } from "./States/Reducers/MainBodyReducers";

function App() {
  return (
    <div className="App">
      <Landing />
      {MainBodyReducers.mainBody.map((fecthData) => {
        return <MainBodyReducers Data={fecthData} />;
      })}
    </div>
  );
}

export default App;
