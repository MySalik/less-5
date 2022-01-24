import React from "react";
import {
    AdvertisementCard, AdvertisementImage, 
    AdvertisementBody
} from "./components/Advertisement"


const Advertisement = ({data}) => {
    const {image, title, text, link} = data
    return(
        <div className="new_section">
            <AdvertisementCard link={link}>
                <AdvertisementImage src={image} />
                <AdvertisementBody title={title} text={text} />
            </AdvertisementCard>
        </div>
    )
}


export default Advertisement;