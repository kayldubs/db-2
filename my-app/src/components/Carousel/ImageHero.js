import React, { useState, useEffect } from 'react';
import { HeroData } from './HeroData';
import { BsDashLg } from 'react-icons/bs';
import './slider.css';



const ImageHero = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

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
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
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
                )},
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
                                    {/* <div className='content2'>
                                        <h2>{pictures.heading2}</h2>
                                        <hr></hr>
                                        <p className='tag'>{pictures.desc2}</p>
                                    </div> */}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className='buttons'>
                <BsDashLg className='left-button' onClick={prevSlide} size={70} />
                <BsDashLg className='right-button' onClick={nextSlide} size={70}/>
                {/* <BsDashLg className='center-arrow' onClick={nextSlide} size={70} /> */}
                </div>
        </div>
    )
};

export default ImageHero;