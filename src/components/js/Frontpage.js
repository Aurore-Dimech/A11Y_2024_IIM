import React, { Fragment } from "react";
import greySquare from "../../assets/greySquare.svg";
import jeudisLitte from "../../assets/jeudisLitte.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Frontpage.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 4,
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

const article = {
  title: "Les Jeudis Littéraires",
  description: "Description",
  button: "Consulter l'article",
  ariaLabel: ": Les jeudis littéraires",
  image: jeudisLitte,
};

const frontPage = [];

while (frontPage.length < 6) frontPage.push(article);

const FrontPage = () => {
  return (
    <section className="section-frontpage">

        <div className="section-title">
          <img
            src={greySquare}
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
            {frontPage.map((article, index) => {
              return (
                <Fragment>
                  <div
                    className="slider"
                    key={index}
                  >
                    <img
                      src={article.image}
                      alt=""
                    />
                    <div className="info-slider">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                  </div>
                  <a href="/jeudis-litteraires" className="button" aria-label={article.button + article.ariaLabel}>{article.button}</a>
                </Fragment>
              );
            })}
          </Carousel>
        </div>

    </section>
  );
};

export default FrontPage;
