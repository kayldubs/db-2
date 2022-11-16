import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Link from '@mui/material/Link';
import { useState } from 'react';
//import animation framework 
//import { motion } from "framer-motion";

import '../Team/mediaQueries.css'

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
        <Container disableGutters maxWidth="sm" maxHeight='sm' sx={{ pt: 8, pb: 6 }} className='employeeGrid'>
            <Grid container spacing={{xs: 1, xl:3}} direction='column'
                justifyContent='center'
                alignItems='center'
            
            >
                    <Card class='media2'>
                        <CardMedia
                            component="img"
                            image={cliff}
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
                        <div className='flex-container'>
                            <Typography variant="h5" component="h2" align='center'>
                                Clifford Steele
                            </Typography>
                            <Typography align='center'>CEO</Typography>
                            {isHovering && (
                                <Typography style={{width:'300px', flexWrap:'nowrap', height: '0px',  marginLeft: '30px', textAlign: 'center'}} className='text'>
                                    Cliff has a background in Aeronautical, Aerospace and Astronautical Engineering from Embry-Riddle Aeronautical University. He focuses on project organization while being the brains behind the engineering that goes into developing the Digibeat Electronic Stethoscope.
                                        </Typography>
                                        )}
                        </div>
                        </CardContent>
                    </Card>
                </Grid>
        </Container>
    );
}