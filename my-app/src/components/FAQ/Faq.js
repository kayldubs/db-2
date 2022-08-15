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
                <h2 className='question'>Do I need to download Digibeat Mobile?</h2>
                <p className='answer'>Yes, you will need to download Digibeat Mobile to store and analyze your recordings taken with the Digibeat Electronic Stethoscope.</p>
                <h2 className='question'>Is there any cost associated with Digibeat Mobile?</h2>
                <p className='answer'>No, the Digibeat Mobile is free to download.</p>
                <h2 className='question'>How do I pair the stethoscope with my phone?</h2>
                <p className='answer'>
                    Once you have downloaded Digibeat Mobile, open the app on your phone and
                    select “Pair Device” under settings. Make sure your phone’s Bluetooth
                    is turned on or the device will not be paired.
                </p>
                <h2 className='question'>Do I need a specific phone to use the Digibeat Mobile?</h2>
                <p className='answer'>
                    No, the companion application is available for both Android and IOS.
                </p>
                <h2 className='question'>My device is having trouble with taking recordings. What should I do? </h2>
                <p className='answer'>
                    Pay special attention to the prompts displayed on screen, and confirm that you are placing
                    the stethoscope in the location on your body that matches the location shown on screen.
                    Also, ensure that you are seated in quiet room with minimal ambient noise and remaining
                    still while recording.
                </p>
            </Typography>
            </Card>
            <Link variant="subtitle1" href="#">
            </Link>
        </Container>
    );
}


export default Faq;