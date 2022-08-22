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

import '../Team/team.css'

// import images
import cliff from '../../assests/imgs/cliff.svg';

export default function Team2() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Grid container alignItems="flex-start" className='positioning2'>

                <Grid class='row'>
                    <Card class='col-4-lg'>
                        <CardMedia
                            component="img"
                            sx={{
                                //     // 16:9
                                // pt: '50%',
                                // mr: '100%'
                            }}
                            image={cliff}
                            alt="random"
                            className='win1'
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}

                        />
                        <CardContent >
                            <Typography variant="h5" component="h2">
                                Clifford Steele
                            </Typography>
                            <Typography>CEO</Typography>
                            {isHovering && (
                                <Typography className='win1'>
                                    Cliff has a background in Aeronautical, Aerospace and Astronautical Engineering from Embry-Riddle Aeronautical University. He focuses on project organization while being the brains behind the engineering that goes into developing the Digibeat Electronic Stethoscope.
                                        </Typography>
                                        )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}