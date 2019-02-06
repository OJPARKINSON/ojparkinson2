import React, { Children } from 'react'
import '../components/layout.css'

const Card = props => (
    <div className="Card">
        <div className="firstCard" width={props.widthone}>
            {props.contentone}
        </div>
        <div className="secondCard" width={props.widthtwo}>
            {props.contenttwo}
        </div>
    </div>
)

export default Card