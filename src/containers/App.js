import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Abdo', age: 26 },
      { id: 2, name: 'Islam', age: 25 },
      { id: 3, name: 'Mostafa', age: 28 },
    ],
    showPersons: false
  };
  togglePersonsHandler = (event) => {
    const isShow = this.state.showPersons;
    this.setState({
      showPersons: !isShow
    })
  }
  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];

    // Old: Object.assign({},this.state.persons[index]);
    const person = {
      ...persons[index]
    }
    person.name = event.target.value;
    persons[index] = person;
    this.setState({ persons });
  }
  deleteHandler = (personIndex) => {
    // Old: const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }
  render() {

    let persons = null;
    let btnClass = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.changeNameHandler}
            delete={this.deleteHandler}
          />
        </div>
      );
      btnClass = classes.Red;
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');

    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('light');
    }
    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')} >Hello World</h1>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    //Old Syntax
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Dos This Work?'));
  }
}

export default App;
