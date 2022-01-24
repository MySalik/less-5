import React from "react";
import {List, ListItem} from "../../../components/List"


const BlockTitle = ({city, date}) => {
    return <p>Сейчас В СМИ в {city} Рекомендуем {date}</p>
}


const NewList = ({items}) => {
    return(
        <List className="list-unstyled" items={items}>
            {items=>items.map((item, index)=>{
                return (
                    <ListItem key={index}>
                        <a href={item.link} className="d-flex align-items-start">
                            <img src={item.icon}></img>
                            <p className="ms-3">{item.title}</p>
                        </a>
                    </ListItem>
                )
            })}
        </List>
    )
}


const CourseList = ({items}) => {
    return(
        <List className="list-unstyled d-flex justify-content-end" items={items}>
            {items=>items.map((item, index)=>{
                return (
                    <ListItem key={index} className="ms-4">
                        <p>
                            {item.title} {item.now} {item.difference}
                            {index+1==items.length ? "% ..." : null}
                        </p>
                    </ListItem>
                )
            })}
        </List>
    )
}


const News = ({data}) => {
    const {city, date, list, courses} = data
    return(
        <div className="new_section">
            <BlockTitle city={city} date={date} />
            <div>
                <NewList items={list} />
                <CourseList items={courses} />
            </div>
        </div>
    )
}


export default News;