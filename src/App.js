import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Abdo', age: 26 },
      { name: 'Islam', age: 25 },
      { name: 'Mostafa', age: 28 },
    ],
    showPersons: false
  };
  swishNameHandler = (newName) => {
    // Do Not Do This: this.state.persons[0].name = 'Abdulrahman';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Islam', age: 25 },
        { name: 'Mostafa', age: 29 },
      ]
    });
  }
  togglePersonsHandler = (event) => {
    const isShow = this.state.showPersons;
    this.setState({
      showPersons: !isShow
    })
  }
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'abdulrahman', age: 26 },
        { name: event.target.value, age: 25 },
        { name: 'Mostafa', age: 29 },
      ]
    });
  }

  render() {
    const style = {
      border: '1px solid #ccc',
      padding: '10px',
      borderShadow: '1px 2px 3px #eee',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          click={(event) => this.swishNameHandler('abdo!')}
          changed={this.changeNameHandler}
          age={this.state.persons[1].age} >Some Dynamic Data</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>)
    }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button
          style={style}
          onClick={(event) => this.swishNameHandler('Abdulrahman')}>
          Swish Names
        </button>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
      </button>
        {
          persons
        }
      </div>
    );
    //Old Syntax
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Dos This Work?'));
  }
}

export default App;
