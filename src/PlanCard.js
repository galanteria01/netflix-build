import React from 'react'
import './PlanCard.css'

const PlanCard = ({title, quality, isTaken=false}) => {
    return (
        <div className="planCard">
            <div className="planCard__details">
                <h3>{title}</h3>
                <h4>{quality}</h4>
            </div>
            <button className="planCard__button">Subscribe</button>
        </div>
    )
}

export default PlanCard
