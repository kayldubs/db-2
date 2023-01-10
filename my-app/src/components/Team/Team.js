
// import Button from '@mui/material/Button';
// import GlobalStyles from '@mui/material/GlobalStyles';
import { Card, Grid } from '@mui/material';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
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
        <Container disableGutters className='topEmpGrid'>
            <Grid container sx={{ pb: 6, mb: 20}} direction='column'
                justifyContent='center'
                alignItems='center' >
                    <Card class='media1'>
                        <CardMedia
                            component="img"
                            image={winston}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '400px',
                                width:'400px',
                            }}
                            
                        />
                        <CardContent alignItems='center'>
                            <div className='flex-container'>
                            <Typography variant="h5" component="h2" align='center'>
                                Winston T. Richards, MD
                            </Typography>
                            <Typography align='center'>CMO</Typography>
                            {isHovering && (
                                <Typography style={{width:'300px', flexWrap:'nowrap', height: '0px', marginLeft: '30px', textAlign: 'center' }} className='text'>
                                    Trauma Surgeon located in the North Central Florida area with a background in medicine and applied mathematics. As the founder and CEO, Winston has seen through the development of the Digibeat Electronic Stethoscope from its original prototype developed in Winston’s garage.
                                </Typography>
                            )}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
        </Container>
    );
}