import React from "react";

const Card = ({src, alt}) => {
    return(
        <img src={src} className="card-img-top" alt={alt}></img>
    )
}

export default Card;


Card.defaultProps = {
    src: "https://vjoy.cc/wp-content/uploads/2019/10/03f312a04e6c61405073cd4932cf69ed.jpg",
    alt: "картинка"
};