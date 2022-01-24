import React from "react";
import Card from "./Card"
import CardImage from "./CardImage"
import CardBody from "./CardBody"
import Button from "./Button"

const CardsApp = () => {

    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 d-flex justify-content-center">
                    <Card>
                        <CardImage />
                        <CardBody />
                    </Card>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <Card>
                        <CardBody 
                            title="Карточка без картинки" 
                            text="Карточка без картинки, зато снизу будет кнопка!"
                        >
                            <Button />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CardsApp;