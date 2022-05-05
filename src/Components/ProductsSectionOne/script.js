import "./style.css"

function ProductOne({ Element, title, text }) {
    return (
        <div className="product-card">
            <Element />
            <h3 className="product-title">{title}</h3>
            <p className="product-text">{text}</p>
        </div>
    )
}

export default ProductOne