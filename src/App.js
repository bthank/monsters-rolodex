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

    // bind the context of this to the handleChange method
    // the following bind statement is not needed when using arrow functions
   // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  // note that arrow functiona automatically bind this to the function context
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
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
        <h1>Monsters Rolodex</h1>
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
