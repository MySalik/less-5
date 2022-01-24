import React from "react";
import Components from "./ServicesData"


const ServiceBlock = ({name, data}) => {
    const {title, ...serviceData} = data
    if (typeof Components[name] != "undefined"){
        return React.createElement(Components[name], {title, serviceData})
    }
    return null;
}


const Services = ({data}) => {
    return(
        <div className="new_section">
            <div className="row">
                {data.map((item, index)=>{
                    const {type, ...Itemdata} = data[index]
                    return <ServiceBlock key={index} name={type} data={Itemdata} />
                })}
            </div>
        </div>
    )
}


export default Services;