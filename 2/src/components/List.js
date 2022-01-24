import React from "react";


const ListItem = props => {
    return(
        <li className={props.className}>{props.children}</li>
    )
}


const List = props => {
    return(
        <ul className={props.className}>
            {props.children(props.items)}
        </ul>
    )
}

export {ListItem, List}