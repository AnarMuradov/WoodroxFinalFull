import React, {  useContext } from "react";
import "./style.scss";
import { Link,  } from "react-router-dom";
import FurnitureCard from "../../Components/FurnitureCard";
import Overlay from "../../Components/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WishListContext } from "../../Context/WishListContext";

function WishList() {
  const{ addWishList,isWishList,wishList }  = useContext(WishListContext)

  return (
   <>
   <Overlay head="Wishlist">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        Wishlist Page
      </Overlay>
    <div className="furniture">
      <div className="furniture__container">
        <div className="furniture__header">
        <h2>Wishlist</h2>
        </div>
        <div className="furniture__cards">
        {wishList.map((x)=>{
          return(
              <FurnitureCard key={x._id}
              img={x.image}
              h={x.title}
              price={x.price}
              i={!isWishList(x) ? "fa-regular fa-heart":"fa-solid fa-heart"}
              click={()=>addWishList(x)}
              />
            )
          })}
          </div>
      </div>
    </div>
   </>
  );
}

export default WishList;