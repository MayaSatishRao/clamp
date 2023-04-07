import React from "react"
import "./Slot.css";

const Slot = ()=>{
    return (
        <div className="slot-container">

            <div className="slot-heading">
                <p>Free slots available</p>
                <label class="switch">
                <input type="checkbox" checked={true} />
                <span class="slider round"></span>
                 </label>
            </div>

            <div className="slots">
                <div className="slot">
                    <p className="date">10</p>
                    <p>Jun</p>
                </div>
                <div className="slot">
                    <p className="date">10</p>
                    <p>Jun</p>
                </div>
                <div className="slot">
                    <p className="date">10</p>
                    <p>Jun</p>
                </div>
                <div className="slot">
                    <p className="date">10</p>
                    <p>Jun</p>
                </div>
            </div>
        </div>
    )
}

export default Slot;