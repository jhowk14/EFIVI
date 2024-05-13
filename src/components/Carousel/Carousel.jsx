import React from 'react';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import './Carousel.css';

const Carousel = ({ imagens }) => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imagens.map((imagem, index) => (
                    <ItemCarousel id={index} key={index} src={imagem.src} alt={imagem.alt} className={index == 0 ? 'carousel-item active' : 'carousel-item'} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;