import ProductImg from "../../Assets/Images/Imsges/product-img.png"

import "./style.css"


function AdvertisingOne({ ImgSource, title, text }) {
    return (
        <div className="card">
            {/* <ImgSource /> */}

            <img src={ProductImg} alt="aaaaa"/>
                
            <p className="title-ad">{title}</p>

            <p className="text-ad">{text}</p>

        </div>
    )
}

export default AdvertisingOne