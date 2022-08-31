import * as React from 'react';

import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
//import { useState } from 'react';
//import animation framework 
//import { motion } from "framer-motion";

//MUI Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import './about.css';


const tiers = [
    {
        icon: <AccountCircleIcon fontSize='large'/>,
        title: 'Patient',
        subheader:'At DigiBeat, Your health is our priority. Many Americans often struggle to find time availability or funds necessary for frequent trips to a physician, especially for long term or recurring diseases. Our cutting edge data collection and analysis detects abnormalities in your health profile early and with exceptional accuracy. We provide the American family the tools they need to become familiar with and feel connected to their own health without needing extensive knowledge or expensive and inaccessible medical equipment.',
        buttonText: 'Sign up for free',
        description:[


        ],
    },
    {
        icon: <LocalHospitalIcon  fontSize='large'/>,
        title: 'Physician',
        subheader:'DigiBeat provides an unprecedented connection not only between patients and their own health, but also with their primary care physician. For a physician, time and efficiency are vital aspects of a successful practice. Our device is designed to streamline the time between auscultation and diagnosis with simple to follow guided exams, intricate health insights, and an easily manageable patient dashboard platform. Monitor disease progression of each patient in real time with personalized health trends, and create a care management plan with the assistance of AI analyzed feedback. Each of these features allow practices to submit CPT billing codes with superior accuracy and efficiency without the need for additional staff or equipment.',
        description: [

        ],
    },
    {   
        icon: <PaidIcon  fontSize='large'/>,
        title: 'Payer',
        subheader:'As of 2022, 6.2 million adults are living in the U.S. with heart failure. Patients admitted for cardiac related events generate an average cost of $15 billion per year for Insurance payers. White papers indicate DigiBeat’s solution can provide a prospective $1.7 Billion in annual savings for payers. Our solution allows physicians to detect and monitor disease progression sooner and more effectively, ultimately reducing the number of chronic stage heart failure admissions and readmissions. We aim to provide payers the tools they need to remain competitive in a capitated system moving towards value based care.',
        description: [

        ],
    },
];



const theme = createTheme();

export default function About() {
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
                            {/* <Button variant="contained">Our Blog</Button> */}
                            <a href='/faq' style={{textDecoration:'none'}}>
                            <Button variant="outlined">FAQ</Button>
                            </a>
                        </Stack>
                    </Container>


                    <React.Fragment>
                        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                        <CssBaseline />
                        <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6, mb: 3 }}>
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
                            <Grid container alignItems="stretch" justifyContent='space-evenly'>
                                {tiers.map((tier) => (
                                    // Enterprise card is full width at sm breakpoint
                                    <Grid
                                        item
                                        style={{display:'flex'}}
                                        key={tier.title}
                                        class='col-lg-3'
                                        padding='5px'
                                        marginX='10px'
                                        height='1000px'
                                        width='400px'
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
                                                    fontSize: '18px',
                                                    alignItems: 'stretch',
                                                }}
                                                // sx={{
                                                //     backgroundColor: (theme) =>
                                                //         theme.palette.mode === 'light'
                                                //             ? theme.palette.grey[200]
                                                //             : theme.palette.grey[700],       
                                                // }}
                                            />
                                             {/* <CardContent
                                             sx={{
                                                 backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                            }}
                                            /> */}

                                            
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            pb='50px'
            pt='90px'
        >
            Who We Are
        </Typography>
                        </Container>
                    </React.Fragment>
                </Box>
            </main>
        </ThemeProvider>
    );
}