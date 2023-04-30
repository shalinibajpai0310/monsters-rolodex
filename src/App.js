import { useState, useEffect } from "react";
import "./App.css";
import CardListComponent from "./components/card-list/CardListComponent";
import SearchBoxComponent from "./components/search-box/SearchBoxComponent";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsterList, setMonsterList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const searchMonster = (event) => {
    const searchField = event.target.value;
    setSearchField(searchField);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsterList(users));
  }, []);

  useEffect(() => {
    const filterList = monsterList.filter((list) =>
      list.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilterList(filterList);
  }, [monsterList, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBoxComponent
        className="search-box"
        handleChange={searchMonster}
        placeholder="Search monsters"
      />
      <CardListComponent monsters={filterList} />
    </div>
  );
};

export default App;
