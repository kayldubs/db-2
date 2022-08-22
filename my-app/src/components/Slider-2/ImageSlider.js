import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
//Material UI Imports 

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';

//css import 
import './slider2.css'



const useStyles = makeStyles((theme) => ({
    featureCard: {
      fontSize:'40px', 
      fontFamily:'Source San Pro, sans-serif',
      fontWeight:'Bold',
      paddingTop: '50px',
      paddingBottom: '50px',
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'underline',
        textDecorationColor: '#6a8aaf',
        
    },
    featureSubtext: {
      paddingTop: '80px',
      margin: 'auto',
      maxWidth: '100%',
      height: "100%",
      textAlign:'center',
      fontSize:'20px',
      fontFamily:'Source San Pro, sans-serif',
    },
    keyFeatures: {
        fontFamily:'Source San Pro, sans-serif',
        fontWeight:'Bold',
        fontSize:'48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'underline',
        textDecorationColor: '#6a8aaf',
        marginBottom: '30px'
    
      }
}))



const ImageSlider = ({ slides }) => {
    const classes = useStyles();
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
};

  const prevSlide = () => {
      setCurrent(current === 0 ? length -1 : current -1);
};

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
    <section className='row'>
        <h1 className={classes.featureCard}>The Future of Medical Examinations</h1>
      <Card varient="outlined" className='col-lg-6 info-plane'>
        
        <div className={classes.featureSubtext}>
        <h2>DigiBeat's patented and intuitive design </h2>
        <p className='desc'>Using wireless technology, our stethescope brings your health and patient accessibility into the modern age.</p>
        <br></br>
        <h2>Optimized remote patient monitoring</h2>
        <p className='desc'>Never miss a beat with remote monitoring serving patients and providers alike.</p>
        <br></br>
        <h2>AI-Assisted detection of heartbeat abnormalities</h2>
        <p className='desc'>AI-powered diagnosis identifies risks and provides timely alerts of patient statistics in real-time.</p>
        <br></br>
        <h2>Modern features for seamless usage</h2>
        <p className='desc'>A reliable stethoscope with volume control, wireless connectivity, noise reduction, and dual streaming connection for accuracy.</p>
        </div>
      </Card>
      <br></br>
        <Card className='col-lg-6 slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt='device angles' className='image'/>
                        )}
                </div>
                )
            })}
        </Card>
        </section>
    )
}

export default ImageSlider
