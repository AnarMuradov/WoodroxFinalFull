import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import FurnitureCard from "../../Components/FurnitureCard";
import Overlay from "../../Components/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoryPage() {
  const [api, setApi] = useState([]);
  const [category, setCategory] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/furniturebycategory/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:3000/furniturecategories/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
   <>
   <Overlay head="Category">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        Category Page
      </Overlay>
    <div className="furniture">
      <div className="furniture__container">
        <div className="furniture__header">
        <h2>{category.category}</h2>
        </div>
        <div className="furniture__cards">
        {api.map((x)=>{
          return(
              <FurnitureCard key={x._id}
              img={x.image}
              h={x.title}
              price={x.price}
              />
            )
          })}
          </div>
      </div>
    </div>
   </>
  );
}

export default CategoryPage;