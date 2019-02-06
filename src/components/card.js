import React from 'react'
import '../components/layout.css'

const Card = props => (
    <div className="Card">
        <div className="firstCard" style={props.widthone}>
            <h2>{props.contentone}</h2>
        </div>
        <div className="secondCard" style={props.widthtwo}>
            <img alt="website preview" src={props.contenttwo} />
        </div>
    </div>
)

export default Card