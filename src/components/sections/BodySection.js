import React from "react";
import foodImage from "../images/foodbackground.jpg";
import "./BodySection.css";

const BodySection = () => {
  const meal = [
    {
      title: "Pizza",
      description: "Loaded with cheese and veggies",
      price: 299,
    },
    {
      title: "Burger",
      description: "Juicy patty with crispy lettuce",
      price: 149,
    },
    {
      title: "Pasta",
      description: "Creamy Alfredo sauce with herbs",
      price: 249,
    },
    {
      title: "Tacos",
      description: "Fresh tortillas packed with flavor",
      price: 199,
    },
    {
      title: "Salad",
      description: "Healthy mix of greens and nuts",
      price: 129,
    },
    {
      title: "Steak",
      description: "Tender and grilled to perfection",
      price: 499,
    },
    {
      title: "Ice Cream",
      description: "Cold, sweet, and delightful",
      price: 99,
    },
    {
      title: "French Fries",
      description: "Crispy golden potato sticks",
      price: 89,
    },
    {
      title: "Sandwich",
      description: "Fresh bread with delicious fillings",
      price: 159,
    },
    {
      title: "Noodles",
      description: "Spicy and full of seasoning",
      price: 179,
    },
  ];

  return (
    <div className="container">
      <img src={foodImage} alt="foodImageBackground" />

      <div className="summaryDiv">
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, fresh and
          tasty!
        </p>
      </div>

      <div className="itemsDiv">
        {meal.map((val, i) => (
          <React.Fragment key={i}>
            <div className="itemCard">
              <div className="details">
                <h4>{val.title}</h4>
                <p>{val.description}</p>
                <p className="price">₹{val.price}</p>
              </div>

              <div className="actionSection">
                <div className="amountBox">
                  <label>Amount</label>
                  <input type="number" defaultValue="1" min="1" />
                </div>

                <button type="button">+ Add</button>
              </div>
            </div>
            {i !== meal.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
