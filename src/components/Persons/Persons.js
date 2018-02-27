import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person
        changed={(event) => { props.changed(event, index) }}
        key={person.id}
        name={person.name}
        age={person.age}
        click={(event) => props.delete(index)}
    />
});
export default Persons;   