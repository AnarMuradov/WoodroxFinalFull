import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Overlay from "../../Components/Overlay";
import { WishListContext } from "../../Context/WishListContext";

function Detail() {
    const{ addWishList,isWishList }  = useContext(WishListContext)
    const {id} =useParams()
    const [api, setApi] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:3000/furniture/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, [id]);
  return (
    <>
     <Overlay head="Detail Page">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link>Detail</Link>
      </Overlay>
      <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__top">
          <div className="portfolio__top__left">
            <img
              src={api.image}
              alt=""
            />
          </div>
          <div className="portfolio__top__right">
            <h4>{api.title}</h4>
            <ul>
             
              <li>
                <span>Price</span>: {api.price}$
              </li>
              <li>
                <span>Brand</span>: {api.brand}
              </li>
              <li>
                <span>Color</span>: {api.color}
              </li>
              <li>
                <span>Design</span>: {api.design}
              </li>
              <li>
                <span>Date</span>: {api.date?.slice(0,10)}
              </li>
              <li>
                <span>View</span>: {api.view} <i className="fa-solid fa-eye"></i>
              </li>
              <li>
                <span onClick={()=>addWishList(api)} style={{"width":"200px","cursor":"pointer"}}>                    {!isWishList(api) ?"Add to WishList": "Remove"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Detail;