import React from "react";
import {
    AdvertisementCard, AdvertisementImage
} from "./components/Advertisement"


const AdvertisementBanner = ({data}) => {
    const {image, link} = data
    return(
        <div className="new_section banner">
            <AdvertisementCard link={link} className="w-100">
                <AdvertisementImage src={image} className="w-100 h-100"/>
            </AdvertisementCard>
        </div>
    )
}


export default AdvertisementBanner;