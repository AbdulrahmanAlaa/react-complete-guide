import React, { Component } from 'react';
import Person from './Person/Person';

export default class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                changed={(event) => { this.props.changed(event, index) }}
                key={person.id}
                name={person.name}
                age={person.age}
                click={(event) => this.props.delete(index)}
            />
        });

    }
}