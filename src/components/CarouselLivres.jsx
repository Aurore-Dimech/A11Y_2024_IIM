import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

function CarouselLivres({title, books}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">{title}</h2>
            <Slider {...settings}>
                {books.map((book, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={book.image} alt={book.title} className="carousel-image" />
                        <p className="carousel-book-title">{book.title}</p>
                        <p className="carousel-book-author">{book.author}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselLivres;