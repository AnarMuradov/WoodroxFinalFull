import React from "react";
import "./index.scss";
import OurBlogCard from "../OurBlogCard";

function OurBlog() {
  return (
    <div className="ourblog">
      <div className="ourblog__container">
        <div className="ourblog__header">
          <h2>RECENT POSTS FROM OUR BLOG</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="ourblog__cards">
            <OurBlogCard 
            img={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp"}
            a1={"Travel"}
            a2={"Life style"}
            h={"Low Cost Advertising"}
            p={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer."}
            s={"31st January, 2018"}
            />

            <OurBlogCard 
            img={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg.webp"}
            a1={"Travel"}
            a2={"Life style"}
            h={"Low Cost Advertising"}
            p={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer."}
            s={"31st January, 2018"}
            />

            <OurBlogCard 
            img={"https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg.webp"}
            a1={"Travel"}
            a2={"Life style"}
            h={"Low Cost Advertising"}
            p={"Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer."}
            s={"31st January, 2018"}
            />
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
