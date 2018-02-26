import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
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
    const style = {
      border: '1px solid #ccc',
      padding: '10px',
      borderShadow: '1px 2px 3px #eee',
      cursor: 'pointer',
      backgroundColor: 'green',
      color: 'white'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            changed={(event) => { this.changeNameHandler.call(this, event, index) }}
            key={person.id}
            name={person.name}
            age={person.age}
            click={(event) => this.deleteHandler(index)}
          />
        })}
      </div>);
      style.backgroundColor = 'red';
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('light');
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')} >Hello World</h1>
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
        {persons}
      </div>
    );
    //Old Syntax
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Dos This Work?'));
  }
}

export default App;
