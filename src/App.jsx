import "./App.scss";
import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import FilterItem from "./components/FilterItem/FilterItem";
import FilterList from "./components/FilterList/FilterList";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
