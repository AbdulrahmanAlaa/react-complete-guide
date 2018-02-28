import React, { Component } from 'react';
import classes from './Person.css';
import propTypes from 'prop-types';
class Person extends Component {
    componentDidMount() {
        if (this.props.position === 0) {
            this.El.focus();
        }
    }
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>This is a {this.props.name} and i am {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input
                    ref={(element) => { this.El = element }}
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed} />
                <button onClick={this.props.click}>Delete</button>
            </div>
        );
    }
}
Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func,
    click: propTypes.func
}
export default Person;