import React, { useState, useEffect } from 'react';
import { HeroData } from './HeroData';
import { BsDashLg } from 'react-icons/bs';
import './slider.css';
import Grid from '@mui/material/Grid';



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
    if (!Array.isArray(slides) || slides.length <= 0) {
        return;
    }

    const goToSlide = slideIndex => {
        setCurrent(slideIndex);
    }

    return (
        <Grid container paddingTop='50px'>
        <Grid className='everything' item xs={12} sm={12}>
            <div className='text-hero'>
                <h1>The World's Most</h1>
                {HeroData.map((header, index) => {
                    return (
                        <div className={index === current ? 'text active' : 'text'} key={index} >
                            {index === current && (
                                <Grid className='top-content' item xs={12} sm={12} md={12}>
                                    <h2>{header.header}</h2>
                                </Grid>
                            )}
                        </div>
                    )
                },
                )
                }
                <h1>Electronic Stethoscope</h1>

            </div>
            <Grid className='hero-icons' rowSpacing={{xs: 4}}>
                {HeroData.map((pictures, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <Grid container rowSpacing={-6} marginTop='40px'>
                                    <img src={pictures.image} alt="Hero IMG" className='hero-image' />
                                    <Grid item direction='column' xs={8.3} sm={6.5} md={5.5} lg={4} xl={4} className='content' marginTop='30px'>
                                        <h2>{pictures.heading}</h2>
                                        <hr></hr>
                                        <p className='tag'>{pictures.desc}</p>
                                    </Grid>
                                </Grid>
                            )}
                        </div>
                    )
                })}
            </Grid>
            <div className='buttons'>
                {slides.map((slides, slideIndex) => (
                    <BsDashLg key={slideIndex} className='buttons-style' size={90} onClick={() => goToSlide(slideIndex)} />
                ))}
            </div>
        </Grid>
     </Grid>
    )
};

export default ImageHero;