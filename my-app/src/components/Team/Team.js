
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

import './team.css';

// import images
//import cliff from '../../assests/imgs/cliff.svg';
import winston from '../../assests/imgs/winston.svg';
//import karll from '../../assests/imgs/karl.svg';





export default function Team() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            pb='30px'
        >
            Who We Are
        </Typography>
            <Grid container alignItems="flex-start" className='positioning'>
                <Grid class='row'>
                    <Card class='col-4-lg'>
                        <CardMedia
                            component="img"
                            sx={{
                                //     // 16:9
                                // pt: '50%',
                                // mr: '100%'
                            }}
                            image={winston}
                            alt="random"
                            className='win1'
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}

                        />
                        <CardContent >
                            <Typography variant="h5" component="h2">
                                Winston T. Richards, MD
                            </Typography>
                            <Typography>CMO</Typography>
                            {isHovering && (
                                <Typography className='win1'>
                                    Trauma Surgeon located in the North Central Florida area with a background in medicine and applied mathematics. As the founder and CEO, Winston has seen through the development of the Digibeat Electronic Stethoscope from its original prototype developed in Winston’s garage.
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}