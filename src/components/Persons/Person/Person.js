import React, { Component } from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
class Person extends Component {
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>This is a {this.props.name} and i am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
                <button onClick={this.props.click}>Delete</button>
            </Aux>
        );

    }
}
export default withClass(Person,classes.Person);