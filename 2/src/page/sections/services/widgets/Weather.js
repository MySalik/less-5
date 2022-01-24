import React from "react";
import Widget from "../components/Widgets";


const Weather = ({title, serviceData}) => {
    const {image, now, evening, night} = serviceData.data
    return(
        <Widget title={title}>
            <div className="row">
                <div className="col-6">
                    <img src={image} />
                    <span>{now}</span>
                </div>
                <div className="col-6">
                    <p>Вечером {evening},</p>
                    <p>Ночью {night}</p>
                </div>
            </div>
        </Widget>
    )
}

export default Weather;