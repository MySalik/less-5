import React from "react";
import News from "./sections/news/News"
import Advertisement from "./sections/advertisements/Advertisement"
import Finder from "./sections/finder/Finder"
import AdvertisementBanner from "./sections/advertisements/AdvertisementBanner"
import Services from "./sections/services/Services"


const MainPage = ({data}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <News data={data.news} />
                </div>
                <div className="col-5">
                    <Advertisement data={data.advertisement} />
                </div>
            </div>
            <Finder data={data.finder} />
            <AdvertisementBanner data={data.banner} />
            <Services data={data.services} />
        </div>
    )
}


export default MainPage;