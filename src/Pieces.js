import React from 'react'
import { Link } from 'react-router-dom'
import './Pieces.css'

const Pieces = (props) => {
    return (
        <Link to={props.link} target="_blank">
        <div className='piece-content'>
          <img src={props.img} alt=""/>
          <div className='piece-textarea'>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
          </div>
        </div>
        </Link>
    )
}

export default Pieces
