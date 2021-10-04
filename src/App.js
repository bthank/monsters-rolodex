import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

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
        <SearchBox 
            placeholder = "search monsters" 
            handleChange = {evnt => 
                            this.setState({searchField: evnt.target.value})}     
        />
        <CardList 
            monsters={filteredMonsters}     
        />
      </div>
    );
  };


}

export default App;
