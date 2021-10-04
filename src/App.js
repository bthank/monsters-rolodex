import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }


  render(){

    
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    // destructure state properties
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <input type="search" placeholder="search monsters" onChange={evnt => this.setState({searchField: evnt.target.value}, ()=>console.log(this.state))} />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    );
  };


}

export default App;
