import React from "react"
import "./Revenue.css"

const Revenue = ()=>{
    return (
       <>
        <div className="revenue-container">
            <div className="revenue-icon">
                      <p>$</p>
            </div>
            <div className="revenue-content">
                <p>Total Revenue</p>
                <p id="revenue">$92,983</p>
                <div className="revenue-line">
                    <span className="revenue-progress"></span>
                </div>
            </div>
        </div>
       </>
    )
}

export default Revenue;