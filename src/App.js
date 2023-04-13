import React, {Component} from 'react'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsterList:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsterList: users}
    }));
  }

  searchMonster = (event) =>{
    const searchField = event.target.value;
    this.setState({
      searchField
    })
  }

  render(){
    const {searchField} = this.state;
    const filteredList = this.state.monsterList.filter((list) => (list.name).toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <header className="App-header">
          <input type="search" placeholder='Search monsters' onChange={this.searchMonster}/>
          <div>
          {filteredList.map((list) => {
            return(<div key={list.id}>{list.name}</div>)
          })}
          </div>
         
        </header>
      </div>)
  };
}

export default App;
