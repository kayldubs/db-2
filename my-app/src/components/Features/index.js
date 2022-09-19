import React from 'react';
import './feature.css';


//Material UI Imports 
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
//import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@mui/material';
//import { borders } from '@mui/system';


//import images

import IMG from '../../assests/imgs/infoCard-04.svg';
import IMG2 from '../../assests/imgs/deviceInfo2.svg';
import IMG3 from '../../assests/imgs/infoAI.svg';

//import { borderRadius, fontWeight } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  keyFeatures: {
    fontFamily:'Source San Pro, sans-serif',
    fontWeight:'Bold',
    color:'black',
    fontSize:'48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'underline',
    textDecorationColor: '#6a8aaf',
    marginBottom: '30px'

  }
}))


 

function Features() {
  const classes = useStyles();
  return (
    
      <Container className='mainContainer'>
      <h1 className={classes.keyFeatures} class='features'>Key Features</h1>
        <Card className='cardPositions4' class='row'>
          <div className='media' class='col-lg-6'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={IMG}
              className='imageDecoration'
            />
          </div>
          <div className='media2' class='col-lg-6 flex-row'>
          <h1 className='title'>Remote Patient Monitoring</h1>
            {/* <h2 className='subTitle'>Revolutionize your practice with the DB1 Digital stethoscope. DB1 fits advanced asculation technology in the palm of your hand using our 6 layer PCBA architecture.</h2> */}
            <h2 className='ptag'>Connect to patients anywhere with Digibeat’s remote patient monitoring tools.</h2>
            <p className='ptag'>• AI-guided exams and encrypted smart notifications enable physicians to stay informed about their patients' health and dynamically adjust care regimens based on data driven conclusions.</p>
            <p className='ptag'>• Intelligently highlight changes in medications and key biometrics to provide an overview of a patient’s disease progression.</p>
          </div>
          </Card>
          <br></br>
          <Card className='cardPositions' class='row'>
          <div class='col-lg-6 copy'>
            <h1 className='title2'>Digital Stethoscope</h1>
            <h2 className='subTitle'>Revolutionize your practice with the DigiBeat Electronic Stethoscope. The DigiBeat Electronic Stethoscope fits advanced asculation technology in the palm of your hand using our 6 layer PCBA architecture.</h2>
            <p className='ptag'>• Listen wirelessly with your preferred headphones or provided USB-C headphones.</p>
            <p className='ptag'>• Collect valuable patient biometric data in a method unattainable by traditional stethoscopes.</p>
            <p className='ptag'>• Evaluate patients more quickly than ever with a clinically improved exam workflow.</p>
          </div>
          <div className='media3' class='col-lg-6 flew-row'>
          <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={IMG2}
              className='imageDecoration'
            />
          </div>
          </Card>
          <br></br>
          <Card className='cardPositions4' class='row'>
          <div className='media' class='col-lg-6'>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={IMG3}
              className='imageDecoration'
            />
          </div>
          <div className='media2' class='col-lg-6 flex-row'>
          <h1 className='title3'>Winston AI</h1>
            <h2 className='subTitle'>Integration with Winston AI allows for an unparalleled understanding between a patient and their health. </h2>
            <p className='ptag'>• Augmented reality guides patients through the exam process with a series of color-coded touch points.</p>
            <p className='ptag'>• Segmentation of heart and lung readings are performed in real time, with key insights automatically highlighted to determine if an abnormality or disease is present.</p>
            <p className='ptag'>• Biometric data for heart rate; respiration rate, temperature, patient orientation, and auscultation site are automatically displayed in-app and to improve future disease analysis.</p>
            <p className='ptag'>• Improved consistency and ease of access to auscultation exams leads to enhanced identification of elevated Pulmonary artery pressure, signs of Coronary Artery Disease, Heart Failure Classification, and a host of other key health insights.</p>
          </div>
          </Card>
        <br></br>
        <br></br>
      </Container>
    

  )
}

export default Features;