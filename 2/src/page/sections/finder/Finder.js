import React from "react";
import {List, ListItem} from "../../../components/List"


const FinderLogo = ({src}) => {
    return <img src={src}/>
}

const FinderForm = () => {
    return (
        <form>
            <input/>
            <button>Найти</button>
        </form>
    )
}

const FinderExample = ({link, title}) => {
    return (
        <p>Найдется всё. Например, <a href={link}>{title}</a></p>
    )
}


const FinderServices = ({items}) => {
    return (
        <List items={items} className="list d-flex list-unstyled">
            {(items)=>items.map((item, index)=>{
                return (
                    <ListItem key={index} className="m-2">
                        <a href={item.link}>{item.title}</a>
                    </ListItem>
                )
            })}
        </List>
    )
}


const Finder = ({data}) => {
    const {logo, services, example} = data
    return(
        <div className="new_section">
            <FinderServices items={services} />
            <div className="d-flex align-items-center">
                <FinderLogo src={logo}/>
                <FinderForm />
            </div>
            <FinderExample link={example.link} title={example.title}/>
        </div>
    )
}


export default Finder;