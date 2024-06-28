import React from "react";
import "./index.scss";
import FurnitureCard from "../FurnitureCard";

function Furniture() {
  return (
    <div className="furniture">
      <div className="furniture__container">
        <div className="furniture__header">
          <h2>MOST POPULAR FURNITURES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="furniture__cards">
            <FurnitureCard
             img={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg.webp"}
             h={"GREEN BUTTER SOFA"}
             p={"Sony laptops are among the most well known laptops on today’s market. Sony is a name that."}/>

            <FurnitureCard
             img={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg.webp"}
             h={"GREEN BUTTER SOFA"}
             p={"Sony laptops are among the most well known laptops on today’s market. Sony is a name that."}/>

            <FurnitureCard
             img={"https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg.webp"}
             h={"GREEN BUTTER SOFA"}
             p={"Sony laptops are among the most well known laptops on today’s market. Sony is a name that."}/>
        </div>
      </div>
    </div>
  );
}

export default Furniture;