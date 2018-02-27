import React, {Component} from 'react';
import classes from './Person.css'

export default class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person] constructor');
    }
    componentWillMount(){
        console.log('[Person] componentWillMount');
    }
    componentDidMount(){
        console.log('[Person] componentDidMount');

    }
    render(){
        console.log('[Person] render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>This is a {this.props.name} and i am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
                <button onClick={this.props.click}>Delete</button>
            </div>
        );
    
    }
}