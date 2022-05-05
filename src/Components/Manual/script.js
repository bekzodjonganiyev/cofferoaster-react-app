import ManualOne from "../ManualOne/script"

import "./style.css"

function Manual() {
    return (
        <div className="manual">
            <p className="sup-title">How it works</p>
            <div className="wrapper">
                <ManualOne bigNumber="01" title="Pick your coffee" text="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." space="margin-right" />
                <ManualOne bigNumber="02" title="Pick your coffee" text="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." space="margin-right" />
                <ManualOne bigNumber="03" title="Pick your coffee" text="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." />
            </div>
            <button className="manual-btn">Create your plane</button>
        </div>
    )
}

export default Manual