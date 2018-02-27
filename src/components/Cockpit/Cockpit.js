import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Auxiliary';
const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button,classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red');

    }
    if (props.persons.length <= 1) {
        assignedClasses.push('light');
    }
    return (
        <Aux>
            <h1 className={assignedClasses.join(' ')} >Hello World</h1>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </Aux >
    );
}
export default cockpit;