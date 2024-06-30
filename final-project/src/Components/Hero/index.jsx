import React, { useEffect, useState } from "react";
import "./index.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Hero() {
  const [api,setApi] = useState([])
  useEffect(() => {
  fetch("http://localhost:3000/furniturecategories")
  .then(res=>res.json())
  .then(data=>setApi(data))
  }, [])
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h2>
            PRECISE CONCEPT DESIGN <br /> FOR STYLISH LIVING
          </h2>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </p>
          <a href="/#">Get Started</a>
        </div>
        <ul className="hero__right">    
          {api.map((x)=>{
            return(
              <Link key={x._id} to={`furniturebycategory/${x._id}`}>
             <li>{x.category}</li>
            </Link>
            )
          })}
         
        </ul>
      </div>
    </div>
  );
}

export default Hero;
