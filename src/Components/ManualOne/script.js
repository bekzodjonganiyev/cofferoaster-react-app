import "./style.css"

function ManualOne({ bigNumber, title, text, space }) {
    return (
        <div className={`manual-one ${space}`}>
            <p className="big-title">{bigNumber}</p>
            <h3 className="manual-title">{title}</h3>
            <p className="manual-text">{text}</p>
        </div>
    )
}

export default ManualOne