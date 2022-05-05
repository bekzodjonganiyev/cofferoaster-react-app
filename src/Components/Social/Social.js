import { Facebook, Twitter, Instagram } from "../../Assets/Images/Icons/Icons"

import "./social.css"

function Social() {
    return (
        <div className="social">
            <Facebook />
            <Twitter className="ml"/>
            <Instagram  className="mr"/>
        </div>
    )
}

export default Social