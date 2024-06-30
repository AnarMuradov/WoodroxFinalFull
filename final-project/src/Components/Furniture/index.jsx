import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import FurnitureCard from "../FurnitureCard";
import { WishListContext } from '../../Context/WishListContext'
function Furniture() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/furniture")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  const{ addWishList,isWishList }  = useContext(WishListContext)

  return (
    <div className="furniture">
      <div className="furniture__container">
        <div className="furniture__header">
          <h2>FURNITURES</h2>
        </div>
        <div className="furniture__cards">
        {api.map((x)=>{
          return(
              <FurnitureCard  key={x._id}
              img={x.image}
              h={x.title}
              detail={`/detail/${x._id}`}
              price={x.price}
              i={!isWishList(x) ? "fa-regular fa-heart":"fa-solid fa-heart"}
              click={()=>addWishList(x)}
            
          
              />
            )
          })}
          </div>
      </div>
    </div>
  );
}

export default Furniture;
