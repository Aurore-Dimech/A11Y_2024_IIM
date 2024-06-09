import React, { Fragment } from "react";
import blueMoon from "../../assets/blueMoon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Frontpage.css";
import articles from "../../data/articlesFrontPage.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1600, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const FrontPage = () => {
  return (
    <section className="section-frontpage">
      <div className="section-title">
        <img
          src={blueMoon}
          alt=""
        />
        <h2>A LA UNE</h2>
      </div>

      <div className="gd-carousel-wrapper">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          className="gd-carousel"
        >
          {articles.map((article, index) => {
            return (
              <Fragment key={index}>
                <div className="slider">
                  <img
                    src={article.image}
                    alt=""
                  />
                  <div className="info-slider">
                    <h3>{article.title}</h3>
                  </div>
                </div>
                <a
                  href="/jeudis-litteraires"
                  className="button"
                  aria-label={article.button + article.ariaLabel}
                >
                  {article.button}
                </a>
              </Fragment>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default FrontPage;
