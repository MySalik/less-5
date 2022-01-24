import React from "react";

const Button = ({text="Go somewhere"}) => {
    return (
        <a href="#" className="btn btn-primary">{text}</a>
    )
}

export default Button;