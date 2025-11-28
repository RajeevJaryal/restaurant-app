import React from "react";
import foodImage from "../images/foodbackground.jpg";
import "./BodySection.css";

const BodySection = () => {
  return (
    <div className="container">
      <img src={foodImage} />
      <div className="summaryDiv">
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad section of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};
export default BodySection;
