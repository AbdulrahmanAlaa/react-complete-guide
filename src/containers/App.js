import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App] constructor');
  }
  componentWillMount() {
    console.log('[App] componentWillMount');
  }
  componentDidMount() {
    console.log('[App] componentDidMount');

  }
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
  //Update state 
  componentWillReceiveProps(nextProps) {
    console.log('[Update App] componentWillReceiveProps', nextProps);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App] shouldComponentUpdate', this.state.showPersons,nextState.showPersons);
  //   return this.state.showPersons !== nextState.showPersons;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App] componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate() {
    console.log('[Update App] componentDidUpdate');
  }
  render() {
    console.log('[App] Render');

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.changeNameHandler}
        delete={this.deleteHandler} />;
    }

    return (
      <div className={classes.App}>
      <button onClick={() => this.setState({showPersons:true})} >Show Persons</button>  
      <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    //Old Syntax
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Dos This Work?'));
  }
}

export default App;
