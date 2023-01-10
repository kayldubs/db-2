
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './mediaQueries.css'

// import images
import winston from '../../assests/imgs/winston.svg';
import cliff from '../../assests/imgs/cliff.svg';
import karll from '../../assests/imgs/karl.svg';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 310,
        sm: 768,
        md: 900,
        lg: 1024,
        xl: 1201,
      },
    },
  });

// const index = [
//     {
//         id: 1,
//         image: {winston},
//     },
//     {
//         id: 2,
//         image:{cliff},
//     },
//     {
//         id: 3,
//         image:{karll}
//     },
// ]

export default function Team() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Container disableGutters>
            <Grid container sx={{ pb: 6, mb: 20}} direction={{xs:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                justifyContent={{xs:'center', sm:'center', md:'center'}}
                alignItems={{xs:'center', sm:'center', md:'center'}}
                className='topEmpGrid'
                >
                    <Card class='media1'>
                        <CardMedia
                            component="img"
                            image={winston}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '300px',
                                width:'300px',
                            }}
                            
                        />
                        <CardContent>
                            <div className='flex-container' alignItems='center'>
                            <Typography variant="h5" component="h2" align='center'>
                                Winston T. Richards, MD
                            </Typography>
                            <Typography align='center'>CMO</Typography>
                            {isHovering && (
                                <Typography style={{width:'250px', flexWrap:'nowrap', height: '0px', textAlign: 'center' }} className='text'>
                                    Trauma Surgeon located in the North Central Florida area with a background in medicine and applied mathematics. As the founder and CEO, Winston has seen through the development of the Digibeat Electronic Stethoscope from its original prototype developed in Winston’s garage.
                                </Typography>
                            )}
                            </div>
                        </CardContent>
                    </Card>
                    <Card class='media2'>
                        <CardMedia
                            component="img"
                            image={cliff}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '300px',
                                width:'300px',
                                flexWrap:'nowrap'
                            }}
                        />
                        <CardContent>
                        <div className='flex-container' alignItems="center">
                            <Typography variant="h5" component="h2" align='center'>
                                Clifford Steele
                            </Typography>
                            <Typography align='center'>CEO</Typography>
                            {isHovering && (
                                <Typography style={{width:'250px', flexWrap:'nowrap', height: '0px', textAlign: 'center'}} className='text'>
                                    Cliff has a background in Aeronautical, Aerospace and Astronautical Engineering from Embry-Riddle Aeronautical University. He focuses on project organization while being the brains behind the engineering that goes into developing the Digibeat Electronic Stethoscope.
                                        </Typography>
                                        )}
                        </div>
                        </CardContent>
                    </Card>
                    <Card class='media3'>
                        <CardMedia
                            component="img"
                            image={karll}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '300px',
                                width:'300px',
                            }}
                        />
                        <CardContent>
                        <div className='flex-container' alignItems="center">
                            <Typography variant="h5" component="h2" align='center'>
                                Karl Dockendorf
                            </Typography>
                            <Typography align='center'>CTO</Typography>
                            {isHovering && (
                                <Typography style={{width:'250px', flexWrap:'wrap', height: '0px', textAlign: 'center'}} className='text'>
                                    Karl earned his BS and ME in electrical and computer engineering followed by a Ph.D. in biomedical engineering (neural engineering focus) from the University of Florida.  Karl is well versed in the design of computer hardware, intelligent information processing, machine learning, and adaptation of neuronal networks.
                                </Typography>
                            )} 
                        </div> 
                        </CardContent>
                    </Card>
                </Grid>
        </Container>
    );
}