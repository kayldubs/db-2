
// import Button from '@mui/material/Button';
// import GlobalStyles from '@mui/material/GlobalStyles';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Link from '@mui/material/Link';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
//import animation framework 
//import { motion } from "framer-motion";

import './mediaQueries.css'

// import images
import winston from '../../assests/imgs/winston.svg';





export default function Team() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Container disableGutters maxWidth="sm" sx={{ pt: 8, pb: 6 }} className='media'>
            <Grid container alignItems="cente" style={{
                position: 'absolute',
                left: '175px',
                 top: '1750px',
                // flexWrap:'nowrap'
                }}
                >
                    <Card class='col-3-lg'>
                        <CardMedia
                            component="img"
                            image={winston}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '400px',
                                width:'400px',
                                flexWrap:'nowrap'
                            }}
                            
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2" align='center'>
                                Winston T. Richards, MD
                            </Typography>
                            <Typography align='center'>CMO</Typography>
                            {isHovering && (
                                <Typography style={{width:'300px', flexWrap:'nowrap', height: '0px' }} className='text'>
                                    Trauma Surgeon located in the North Central Florida area with a background in medicine and applied mathematics. As the founder and CEO, Winston has seen through the development of the Digibeat Electronic Stethoscope from its original prototype developed in Winston’s garage.
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
        </Container>
    );
}