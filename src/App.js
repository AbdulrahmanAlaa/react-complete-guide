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
    ]
  };
  swishNameHandler = ()=>{
    // Do Not Do This: this.state.persons[0].name = 'Abdulrahman';
    this.setState({
      persons:[
        { name: 'Abdulrahman', age: 26 },
        { name: 'Islam', age: 25 },
        { name: 'Mostafa', age: 29 },
      ]
    })
      
    console.log('clicked !!')
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.swishNameHandler}>
        Swish Names
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          click={this.swishNameHandler}
          age={this.state.persons[1].age} >Some Dynamic Data</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>  
    );
    //Old Syntax
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Dos This Work?'));
  }
}

export default App;
