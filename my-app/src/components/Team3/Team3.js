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
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
//import animation framework 
//import { motion } from "framer-motion";



// import images
import karll from '../../assests/imgs/karl.svg';

//import karll from '../../assests/imgs/karl.svg';

export default function Team3() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Container disableGutters maxWidth="sm" sx={{ pt: 8 }}>
            <Grid container style={{
                position: 'relative',
                top: '-270px',
                right: '-555px',
                flexWrap:'nowrap'
            }}>
                    <Card class='col-3-lg'>
                        <CardMedia
                            component="img"
                            image={karll}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '400px',
                                width:'400px',
                                flexWrap:'nowrap'
                            }}
                        />
                        <CardContent >
                            <Typography variant="h5" component="h2" align='center'>
                                Karl Dockendorf
                            </Typography>
                            <Typography align='center'>CTO</Typography>
                            {isHovering && (
                                <Typography style={{width:'300px', flexWrap:'nowrap', height: '0px'}}>
                                    Karl earned his BS and ME in electrical and computer engineering followed by a Ph.D. in biomedical engineering (neural engineering focus) from the University of Florida.  Karl is well versed in the design of computer hardware, intelligent information processing, machine learning, and adaptation of neuronal networks.
                                </Typography>
                            )} 
                        </CardContent>
                    </Card>
                </Grid>
        </Container>
    );
}