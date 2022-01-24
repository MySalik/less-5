import React from "react";
import {List, ListItem} from "../../../../components/List"
import Widget from "../components/Widgets";


const TVList = ({items}) => {
    return(
        <List className="list-unstyled" items={items}>
            {(items)=>items.map((item, index)=>{
                const {time, name, channel} = item
                return(
                    <ListItem key={index}>
                        {time} {name} {channel}
                    </ListItem>
                )
            })}
        </List>
    )
}


const TV = ({title, serviceData}) => {
    const {list} = serviceData.data
    return(
        <Widget title={title}>
            <TVList items={list}/>
        </Widget>
    )
}


export default TV;