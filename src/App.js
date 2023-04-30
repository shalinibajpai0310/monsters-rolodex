import React, { Component } from "react";
import "./App.css";
import CardListComponent from "./components/card-list/CardListComponent";
import SearchBoxComponent from "./components/search-box/SearchBoxComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsterList: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsterList: users };
        })
      );
  }

  searchMonster = (event) => {
    const searchField = event.target.value;
    this.setState({
      searchField,
    });
  };

  render() {
    console.log("render from Appjs");
    const { searchField } = this.state;
    const filteredList = this.state.monsterList.filter((list) =>
      list.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
          <h1 className="app-title">Monster Rolodex</h1>
          <SearchBoxComponent className="search-box" handleChange={this.searchMonster} placeholder="Search monsters"/>
          <CardListComponent monsters={filteredList}/>
      </div>
    );
 } 
}

export default App;
