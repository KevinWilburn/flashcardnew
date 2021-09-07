import React from 'react'
import './flashcard.css'

const Card = (props) => (
    <div className="flashcard-page">
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="term-name">{props.termName}</div>
            </div>
            <div className="back">
                <div className="definition">{props.definition}</div>
            </div>
        </div>
    </div>
    </div>
)
 export default Card
  

