import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/CarouselLivres.css';

function CarouselLivres({title, books}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div className="container-carousel">
            <div className="book_title_style"> {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h3 className="title_carousel">{title}</h3>
              <div className="trait"></div>
            </div>
            <Slider {...settings}>
                {books.map((book, index) => (
                    <div key={index} className="carousel-slides">
                        <img src={book.cover} alt={book.title.toUpperCase()} className="carousel-image" />
                        <div className='carouselBookInformation'>
                            <p className="carousel-title-book">{book.title.toUpperCase()}</p>
                            <p className="carousel-author">{book.author}</p>
                            <p className="carousel-author">{book.publicationDate}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselLivres;