import React, { useEffect, useState } from "react";
import "./index.scss";
import FurnitureCard from "../FurnitureCard";

function CategoryPageComponent() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/furniturebycategory/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  const { id } = useParams();


  return (
    <div className="furniture">
      <div className="furniture__container">
        <div className="furniture__header">
          <h2>FURNITURES</h2>
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
  );
}

export default CategoryPageComponent;