import React from "react";


const AdvertisementImage = ({src, className=""}) => {
    return <img src={src} className={className} />
}


const AdvertisementBody = ({title, text}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )
}


const AdvertisementCard = ({link, className, children}) => {
    return(
        <a href={link} className={className}>
            {children}
        </a>
    )
}

export {AdvertisementImage, AdvertisementBody, AdvertisementCard}