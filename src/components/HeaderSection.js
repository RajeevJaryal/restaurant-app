import React from "react";
import "./HeaderSection.css";

const HeaderSecction=()=>{
    return(
        <header>
            <h1>ReactMeals</h1>
            <div>
                <p>Your Cart</p>
                <p className="amoutNumber">0</p>
            </div>
        </header>
    );
}
export default HeaderSecction;