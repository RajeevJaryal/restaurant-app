import React from "react";
import "./HeaderSection.css";
import HeaderButton from "./HeaderButton";
const HeaderSecction=(props)=>{
    return(
        <header>
            <h1>ReactMeals</h1>
            <HeaderButton onShowCartHandler={props.showTheCart}/>
        </header>
    );
}
export default HeaderSecction;