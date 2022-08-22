import * as React from 'react';

import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
//import animation framework 
//import { motion } from "framer-motion";

//MUI Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import './about.css';

// import images
import cliff from '../../assests/imgs/cliff.svg';
import winston from '../../assests/imgs/winston.svg';
import karll from '../../assests/imgs/karl.svg';

const tiers = [
    {
        icon: <AccountCircleIcon fontSize='large'/>,
        title: 'Patient',
        subheader: 'At DigiBeat, Your health is our priority. Many Americans often struggle to find time availability or funds necessary for frequent trips to a physician, especially for long term or recurring diseases. Potentially even more concerning is the fear of potentially missing critical indicators for the start or progression of illness. Our cutting edge data collection and analysis detects abnormalities in your health profile early and with exceptional accuracy.',
        buttonText: 'Sign up for free',
        description:[


        ],
        buttonVariant: 'outlined',
    },
    {
        icon: <LocalHospitalIcon  fontSize='large'/>,
        title: 'Physician',
        subheader: 'DigiBeat provides an unprecedented connection not only between patients and their own health, but also with their primary care physician. For a physician, time and efficiency are vital aspects of a successful practice. Our device is designed to streamline the time between auscultation and diagnosis with simple to follow guided exams, intricate health insights, and an easily manageable patient dashboard platform. Monitor disease progression of each patient in real time with personalized health trends, and create a care management plan with the assistance of AI analyzed feedback.',
        description: [

        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {   
        icon: <PaidIcon  fontSize='large'/>,
        title: 'Payer',
        subheader: 'As of 2022, 6.2 million adults in the U.S. have heart failure. The elevated ER admission rates as a result of this figure generate an average cost of $15 billion per year for Insurance payers. DigiBeat’s Clinical solution allows physicians to detect and monitor disease progression sooner and more effectively, ultimately reducing the number of chronic stage heart failure admissions and readmissions. We aim to provide payers the tools they need to remain competitive in a capitated system moving towards value based care.',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];



const theme = createTheme();

export default function About() {
    const [isHovering, setIsHovering] = useState(false);
    

    const handleMouseOver = e => {
            
            setIsHovering(true);
            
    }
        
    

    const handleMouseOut = e => {
        
        setIsHovering(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <main className='aboutBody'>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            p='20px'
                        >
                            What We Do
                        </Typography>
                        <Typography fontSize='18px' align="center" color="text.secondary">
                        At DigiBeat, we have created an innovative Digital Stethoscope and medical exam system which combines traditional methods of medical practice with current technologies in artificial intelligence and augmented reality to improve patient outcomes. By bridging together the diagnostic power of AI with the guidance capabilities of augmented reality, we have found a way to bring the auscultation examination process into the home. Opening up vast opportunities to better understand patient outcomes, medication efficacies, disease progressions, and health expectancies. All of which will help to reduce payer costs.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Our Blog</Button>
                        </Stack>
                    </Container>


                    <React.Fragment>
                        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                        <CssBaseline />
                        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Who We Help
                            </Typography>
                            {/* <Typography variant="h5" align="center" color="text.secondary" component="p"></Typography> */}
                        </Container>
                        {/* End hero unit */}
                        <Container maxWidth="md" component="main" class='row'>
                            <Grid container alignItems="flex-start" justifyContent='space-evenly'>
                                {tiers.map((tier) => (
                                    // Enterprise card is full width at sm breakpoint
                                    <Grid
                                        item
                                        key={tier.title}
                                        class='col-lg-3'
                                        padding='5px'
                                        marginX='10px'
                                    >
                                        <Card>
                                        <CardMedia component="h2" variant="h3" color="text.primary" align='center'>
                                                        {tier.icon}
                                                    </CardMedia>
                                            <CardHeader
                                                icon={tier.icon}
                                                title={tier.title}
                                                subheader={tier.subheader}
                                                titleTypographyProps={{ align: 'center' }}
                                                subheaderTypographyProps={{
                                                    align: 'center',
                                                }}
                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                            
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                       p: "auto"
                                                    }}
                                                >
                                                    
                                                </Box>
                                                <ul>
                                                    {tier.description.map((line) => (
                                                        <Typography
                                                            component="li"
                                                            variant="subtitle1"
                                                            align="center"
                                                            key={line}
                                                        >
                                                            {line}
                                                        </Typography>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </React.Fragment>
                </Box>
            </main>
        </ThemeProvider>
    );
}