import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Gallery = (props) => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveWidth: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    }

    

    const showGallery = (slides) => {
        if (slides) {
            return (
                <Slider {...settings} >
                    {slides.map((slide) => {
                        
                        const slick2 = {
                            background: `url(/images/galleries/${slide.images[0].img})no-repeat`,
                            height: '20rem',
                            width: '400px',
                            backgroundPosition: 'center bottom',
                            backgroundSize: 'cover',
                            position: 'relative',
                            fontFamily: 'Fjalla One',
                            objectFit: 'cover'
                        }
                        
                        return (
                            <Link to={`/gallery/${slide.id}`} key={slide.id} > 
                                <div className="slide-image" style={slick2}>
                                </div>
                                <div className="slide-cover">
                                    <h5 className="slide-name">{slide.artist}</h5>
                                </div>
                                
                            </Link>
                        )

                    })}
                </Slider>
            )
        }
    }


    return (
        <div>
            <div className="home-gallery">
                <h2>Awesome Gallery</h2>
                {showGallery(props.galleries)}
            </div>
        </div>
    )
}

export default Gallery;
