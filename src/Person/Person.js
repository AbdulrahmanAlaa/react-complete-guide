import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    const styles = {
        padding:'10px',
        margin:'10px',
        border:'1px solid #ccc',
        boxShadow:'1px 2px 3px #eee',
        backgroundColor:'#ee5050',
        fontSize:'12pt',
        color:'white',
        '@media (max-width: 500px)':{
            width: '100%'
        }
    }
    return (
        <div className="Person">
            <p onClick={props.click}>This is a {props.name} and i am {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
            <button style={styles} className="" onClick={props.click}>Delete</button>
        </div>
    );

}
export default Radium(person);