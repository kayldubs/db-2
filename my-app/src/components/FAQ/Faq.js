import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Container } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './faq.css';


const Faq = () => {

    return (
        // <Paper
        //     // sx={{
        //     //     position: 'relative',
        //     //     backgroundColor: '#dbf1fa',
        //     //     color: '#6a8aaf',
        //     //     mb: 4,
        //     //     backgroundSize: 'cover',
        //     //     backgroundRepeat: 'no-repeat',
        //     //     backgroundPosition: 'center',
        //     // }}
        // >
        <Container>
            <Box className='top-box'>
            <Typography>
                <h1 className="header-text">Frequently asked Questions</h1>
            </Typography>
            </Box>
            <Card className='questions-section'>
            <Typography>
                <h2 className='question'>How do I acquire a DigiBeat Electronic Stethoscope?</h2>
                <p className='answer'>To receive your own DigiBeat Electronic Stethoscope, please complete the form labeled “Interested in trying Digibeat?” on our Home page. A representative from our team will be in contact with you as soon as possible to discuss next steps.</p>
                <h2 className='question'>Do I need to be a specialist to use the device effectively?</h2>
                <p className='answer'>No, DigiBeat’s device is designed to be universally accessible, thanks to our easy to follow guided exam process. Physicians can closely monitor recordings taken by their patients and provide supplemental input and guidance.</p>
                <h2 className='question'>Why should I use the DigiBeat Electronic Stethoscope over a traditional stethoscope?
                </h2>
                <p className='answer'>
                The DigiBeat Electronic Stethoscope drastically simplifies the traditional medical exam process and provides unparalleled data collection and analysis. Users obtain key health insights through Winston (our artificial intelligence) data analysis to help detect the progression of cardiovascular disease related illness.
                </p>
                <h2 className='question'>Are there any special tools needed to use the device?</h2>
                <p className='answer'>
                No, the DigiBeat stethoscope is a stand alone unit that can be used like a normal stethoscope. If you wish to save or share your exams, a mobile device will be needed to run our application(s).
                </p>
                <h2 className='question'>Will the DigiBeat Electronic Stethoscope work with my phone?</h2>
                <p className='answer'>
                Yes, the DigiBeat Electronic Stethoscope is compatible with all Apple and Android smartphone devices.
                </p>
                <h2 className='question'>How does DigiBeat keep data secure?</h2>
                <p className='answer'>
                DigiBeat understands the necessity of data privacy, and ensures that all HIPAA standards and regulations for PHI are met to protect the privacy of our users.
                </p>
            </Typography>
            </Card>
            <Link variant="subtitle1" href="#">
            </Link>
        </Container>
    );
}


export default Faq;