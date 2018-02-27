import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Abdo', age: 26 },
      { id: 2, name: 'Islam', age: 25 },
      { id: 3, name: 'Mostafa', age: 28 },
    ],
    showPersons: false
  };
  swishNameHandler = (newName) => {
    // Do Not Do This: this.state.persons[0].name = 'Abdulrahman';
    this.setState({
      persons: [
        { id: 1, name: newName, age: 26 },
        { id: 2, name: 'Islam', age: 25 },
        { id: 3, name: 'Mostafa', age: 28 },
      ]
    });
  }
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
        <ErrorBoundary>
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                changed={(event) => { this.changeNameHandler.call(this, event, index) }}
                key={person.id}
                name={person.name}
                age={person.age}
                click={(event) => this.deleteHandler(index)}
              />
            })}
          </div>
        </ErrorBoundary>);
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
          class
          key="btnNameChange"
          onClick={(event) => this.swishNameHandler('Abdulrahman')}>
          Swish Names
        </button>
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
