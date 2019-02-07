import React, { Component } from 'react'
import { getGalleryItem, clearGalleryItem } from '../actions/dispatchActions';
import { connect } from 'react-redux';
import Slider from 'react-slick';



class GalleryItem extends Component {

    componentDidMount() {
        this.props.getGalleryItem(this.props.match.params.id)

    }
    componentWillUnmount() {
        this.props.clearGalleryItem();
    }


    showGallery = (gallery) => {
        if (gallery) {
           
            const settings = {
                arrows: false,
                infinite: true,
                speed: 200,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveWidth: false,
                autoplay: true,
                autoplaySpeed: 3000,
                pauseOnHover: false
            }
            
            return (
                <div>
                    <h2 className="top">
                        The best of {gallery.artist}
                    </h2>

                    <Slider {...settings} >
                        {gallery.images.map((slide) => {
                            
                            const slick3 = {
                                background: `url(/images/galleries/${slide.img})no-repeat`,
                                height: '400px',
                                width: '400px',
                                backgroundPosition: 'center bottom',
                                backgroundSize: 'cover',
                                position: 'relative',
                                objectFit: 'cover'
                            }  

                            return (
                                <div key={slide.img} to={`/`}>
                                    <div style={slick3}></div>
                                    <div className="slide-desc">
                                        <span>{slide.desc}</span>
                                        <br/>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            )

        }
    }


    render() {
        const item = this.props.galleries.galleries[0];
        return (
            <div className="new_container">
                {this.showGallery(item)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        galleries: state.galleries
    }
}

export default connect(mapStateToProps, { getGalleryItem, clearGalleryItem })(GalleryItem)
