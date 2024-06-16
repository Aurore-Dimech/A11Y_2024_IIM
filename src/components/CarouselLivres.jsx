import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/CarouselLivres.css';

function CarouselLivres({title, books, className}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={"container-carousel " + className}>
            <div className="book_title_style"> {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h2 className="title_carousel">{title}</h2>
              <div className="trait"></div>
            </div>
            <Slider {...settings}>
                {books.map((book, index) => (
                    <div key={index} className="carousel-slides">
                        <div className='carousel-image-container'>
                            <img src={book.cover} alt={book.title.toUpperCase()} className="carousel-image" />
                        </div>
                        <div className='carouselBookInformation'>
                            <a href={'/livre/' + book.id} className="carousel-title-book">{book.title.toUpperCase()}</a>
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