import React from "react";


const WidgetTitle = ({title}) => {
    const {name, icon=""} = title
    const className = icon ? "d-flex justify-content-between" : null
    return (
        <p className={className}>
            <span>{name}</span>
            {icon && <span>{icon}</span>}
        </p>
    )
}


const Widget = ({title, children}) => {
    return(
        <div className="col-4 widget">
            <WidgetTitle title={title} />
            {children}
        </div>
    )
}


export default Widget;