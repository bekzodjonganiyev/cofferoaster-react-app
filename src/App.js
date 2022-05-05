import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Advertising from "./Components/Advertising/script";
import Product from "./Components/ProductsSection/script";
import Manual from "./Components/Manual/script";




// import "./Components/Header/header.css"

function App() {
  return (
    <div>
      <Header  display="display-bock-header"/>
      <Hero
        title={"Great coffee made simple."}
        text={"Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."} />
      <Advertising />
      <Product />
      <Manual />
      <Header bgColor="black" textColor="text-color"  display="display-bock-footer"/>
    </div>
  );
}

export default App;
