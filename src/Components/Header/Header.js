import Nav from "../HeaderNav/Nav"
import Social from "../Social/Social"
import "./header.css"

function Header({display, bgColor, textColor }) {
    return (
        <div className={`header ${bgColor}`}>
           
           <h1 className={`mr ${textColor}`}>CoffeRoads</h1>
            <Nav />
          
             
            <Social className={`${display}`}/>
        </div>
    )
}

export default Header