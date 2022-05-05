import ProductOne from "../ProductsSectionOne/script"
import { CoffeBean, Box, Truck } from "../../Assets/Images/Icons/Icons.js"

import "./style.css"

function Product() {
    return (
        <div className="product">
            <h1 className="main-tite">Why choose us?</h1>
            <p className="main-text">A large part of our role is choosing which particular coffees will be featured
                in our range. This means working closely with the best coffee growers to give
                you a more impactful experience on every level.</p>
            <div className="products">
                <ProductOne Element={CoffeBean} title="Best quality" text="Discover an endless variety of the world’s best artisan coffee from each of our roasters." />
                <ProductOne Element={Box} title="Best quality" text="Discover an endless variety of the world’s best artisan coffee from each of our roasters." />
                <ProductOne Element={Truck} title="Best quality" text="Discover an endless variety of the world’s best artisan coffee from each of our roasters." />
            </div>
        </div>
    )
}

export default Product