import React from "react";
import {List, ListItem} from "../../../../components/List"
import Widget from "../components/Widgets";


const VisitedList = ({items}) => {
    return(
        <List className="list-unstyled" items={items}>
            {(items)=>items.map((item, index)=>{
                const {name, title, link} = item
                return(
                    <ListItem key={index}>
                        <a href={link}>
                            {name}-{title}
                        </a>
                    </ListItem>
                )
            })}
        </List>
    )
}


const Visited = ({title, serviceData}) => {
    const {list} = serviceData.data
    return(
        <Widget title={title}>
            <VisitedList items={list}/>
        </Widget>
    )
}


export default Visited;