import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ComicsCard from "./ComicsCard";

function App() {
  return (
    <>
      <h1 className="App-title" style={{ textAlign: "center" }}>
        ImoComics
      </h1>
      <ComicsCard />
    </>
  );
}

export default App;
