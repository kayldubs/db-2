import React, { useState, useEffect } from 'react';
import { HeroData } from './HeroData';
import { BsDashLg } from 'react-icons/bs';
import './slider.css';



const ImageHero = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 15000;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [current])

    const nextSlide = () => {
        const isLastSlide = current === slides.length - 1;
        const newCurrent = isLastSlide ? 0 : current + 1;
        setCurrent(newCurrent)
    };

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return;
    }

    const goToSlide = slideIndex => {
        setCurrent(slideIndex);
    }

    return (
        <div className='everything'>
            <div className='text-hero'>
                <h1>The World's Most</h1>
                {HeroData.map((header, index) => {
                    return (
                        <div className={index === current ? 'text active' : 'text'} key={index}>
                            {index === current && (
                                <div className='top-content'>
                                    <h2>{header.header}</h2>
                                </div>
                            )}
                        </div>
                    )
                },
                )
                }
                <h1>Electronic Stethoscope</h1>

            </div>
            <div className='hero-icons'>
                {HeroData.map((pictures, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <div>
                                    <img src={pictures.image} alt="Hero IMG" className='hero-image' />
                                    <div className='content'>
                                        <h2>{pictures.heading}</h2>
                                        <hr></hr>
                                        <p className='tag'>{pictures.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className='buttons'>
                {slides.map((slides, slideIndex) => (
                    <BsDashLg key={slideIndex} className='buttons-style' size={90} onClick={() => goToSlide(slideIndex)} />
                ))}
            </div>
        </div>
    )
};

export default ImageHero;