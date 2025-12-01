import React from "react";
import "./HeaderSection.css";
import HeaderCartButton from "./HeaderButton";
const HeaderSecction=(props)=>{
    return(
        <header>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShowCartHandler={props.showTheCart}/>
        </header>
    );
}
export default HeaderSecction;