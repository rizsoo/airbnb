import React from 'react'
import './guides_component.css'
import { Link } from 'react-router-dom';

function Machines(props) {
    return (
    <Link to={props.link}>
    <div className="machines">
        <img src={props.image} alt='image_machines'/>
        <h5>{props.title}</h5>
    </div>
    </Link>
    )
}

export default Machines
