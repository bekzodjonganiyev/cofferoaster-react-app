import "./hero.css"

function Hero({ title, text }) {
    return (
        <div className="hero">
            <h1 className="title">{title}</h1>
            <p className="text">{text}</p>

            <button className="btn">Create yoour plan</button>
        </div>
    )
}

export default Hero