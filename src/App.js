import React,{Fragment} from "react";

import HeaderSecction from "./components/sections/HeaderSection";
import BodySection from "./components/sections/BodySection";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart/>
      <HeaderSecction/>
      <BodySection/>
    </Fragment>
  );
}

export default App;
