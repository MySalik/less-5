import React from "react";
import Button from "./Button"

const CardBody = ({title, text, children}) => {
    return(
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            {children}
      </div>
    )
}

export default CardBody;


CardBody.defaultProps = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
};