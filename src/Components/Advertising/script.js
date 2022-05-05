import AdvertisingOne from "../AdvertisingOne/script"
// import { CoffeBean, Box, Truck } from "../../Assets/Images/Icons/Icons.js"

// import ProductImg from "../../Assets/Images/Imsges/product-img.png"

import "./style.css"

function Advertising() {
    return (
        <div className="advertising">
            <AdvertisingOne  title="Assalomu alaykum" text={"Light and flavorful blend with cocoa and black pepper for an intense experience."} />
            <AdvertisingOne  title="Gran Espresso" text={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."} />
            <AdvertisingOne  title="Gran Espresso" text={"Mild and smooth blend featuring notes of toasted almond and dried cherry."} />
            <AdvertisingOne  title="Gran Espresso" text={"Ethiopian hand-harvested blend densely packed with vibrant fruit notes."} />
        </div>
    )
}

export default Advertising