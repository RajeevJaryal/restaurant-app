import React,{Fragment, useState} from "react";

import HeaderSecction from "./components/sections/Header/HeaderSection";
import BodySection from "./components/sections/BodySection";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart,setShowCart]=useState(false);

  const showCartHandler=()=>{
    setShowCart(true);
  }


  const hideCartHandler=()=>{
    setShowCart(false);
  }

  return (
    <Fragment>
      {showCart && <Cart hideCart={hideCartHandler}/>}
      <HeaderSecction showTheCart={showCartHandler}/>
      <BodySection/>
    </Fragment>
  );
}

export default App;
