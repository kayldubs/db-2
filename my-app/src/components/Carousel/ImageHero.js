import React, { useState, useEffect } from 'react';
import { HeroData } from './HeroData';
import { BsDashLg } from 'react-icons/bs';
import './slider.css';
import { Container } from '@mui/system';
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
        <Container paddingTop='50px'>
        <Grid className='everything'>
            <div className='text-hero'>
                <h1>The World's Most</h1>
                {HeroData.map((header, index) => {
                    return (
                        <div className={index === current ? 'text active' : 'text'} key={index} >
                            {index === current && (
                                <Grid className='top-content' direction="row" item xs={12} sm={12} md={12}>
                                    <h2>{header.header}</h2>
                                    <h1 className="bottom-content">Electronic Stethoscope</h1>
                                </Grid>
                            )}
                        </div>
                    )
                },
                )
                }
                

            </div>
            </Grid>
            <Grid className='hero-icons' rowSpacing={{xs: 4}}>
                {HeroData.map((pictures, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <Grid container className="hero-container">
                                    <img src={pictures.image} alt="Hero IMG" className='hero-image' />
                                    <Grid item direction='column' 
                                    // sm={6.5} md={5.5} lg={4} xl={4} 
                                    className='content'>
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
                    <BsDashLg key={slideIndex} className='buttons-style' size={90} onClick={() => goToSlide(slideIndex)}/>
                ))}
            </div>
     </Container>
    )
};

export default ImageHero;