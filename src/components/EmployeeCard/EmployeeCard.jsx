import "./EmployeeCard.scss";
import { useState } from "react";



const EmployeeCard = ({name, role}) => {
   
    const [ticketCount, setTicketCount] = useState(0);


    const onMinusButton = () => {
        if(ticketCount>0) setTicketCount(ticketCount-1)
    }

    const onPlusButton = () => {
        setTicketCount(ticketCount+1)
    }

    return(
        <>
            <div className="card__container">
                <div className="card__text">
                    <p className="card__role">{role}</p>    
                    <p className="card__name">{name}</p>
                    <p className="card__count">{ticketCount}</p>
                </div>
                
                <div className="card__counters">

                    <button onClick={onMinusButton} className="card__button card__button--minus">-</button>

                    <button onClick={onPlusButton} className="card__button card__button--plus">+</button>
                    
                </div>

            </div>
        </>
    )
};

export default EmployeeCard;