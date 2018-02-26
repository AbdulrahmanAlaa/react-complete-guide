import React from 'react';
import classes from './Person.css'
import Radium from 'radium';

const person = (props) => {
    
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>This is a {props.name} and i am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
            <button onClick={props.click}>Delete</button>
        </div>
    );

}
export default person;