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
import { createTheme, ThemeProvider } from '@mui/material/styles';


// import images
import karll from '../../assests/imgs/karl.svg';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 310,
        sm: 768,
        lg: 1024,
        xl: 1201,
      },
    },
  });

export default function Team3() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <Container disableGutters className='topEmpGrid'>
            <Grid container sx={{ pt: 8, pb: 6, mb: 20 }} flexDirection={{xs: 'column', sm: 'column', lg: 'row' }} 
                justifyContent='center'
                alignItems='center'
            >
                    <Card class='media3'>
                        <CardMedia
                            component="img"
                            image={karll}
                            alt="random"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            style={{
                                height: '400px',
                                width:'400px',
                            }}
                        />
                        <CardContent alignItems="center">
                        <div className='flex-container'>
                            <Typography variant="h5" component="h2" align='center'>
                                Karl Dockendorf
                            </Typography>
                            <Typography align='center'>CTO</Typography>
                            {isHovering && (
                                <Typography style={{width:'300px', flexWrap:'wrap', height: '0px',  marginLeft: '30px', textAlign: 'center'}} className='text'>
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