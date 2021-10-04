import "./App.scss";

import FilterItem from "./components/FilterItem/FilterItem";
import FilterList from "./components/FilterList/FilterList";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

import beers from "./data/beers";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main data={beers} />
    </div>
  );
};

export default App;
