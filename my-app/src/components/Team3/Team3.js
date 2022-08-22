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
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Grid container alignItems="flex-start" className='positioning3'>

                <Grid class='row'>
                    <Card class='col-4-lg'>
                        <CardMedia
                            component="img"
                            sx={{
                                //     // 16:9
                                // pt: '50%',
                                // mr: '100%'
                            }}
                            image={karll}
                            alt="random"
                            className='win1'
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}

                        />
                        <CardContent >
                            <Typography variant="h5" component="h2">
                                Karl Dockendorf
                            </Typography>
                            <Typography>CTO</Typography>
                            {isHovering && (
                                <Typography className='win1'>
                                    Karl earned his BS and ME in electrical and computer engineering followed by a Ph.D. in biomedical engineering (neural engineering focus) from the University of Florida.  Karl is well versed in the design of computer hardware, intelligent information processing, machine learning, and adaptation of neuronal networks.
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                 {/* <Card className='bottomEmployees'>
                    <CardContent className='aboutEm' class='row'>
                        <div class='col-lg-6'>
                            <Typography>Arash Samimi - Regulatory/Quality Engineer</Typography>
                            <Typography>Calvin Bond - Electrical/Mechanical Engineer</Typography>
                        </div>
                        <div className='column2' class='col-lg-6'>
                            <Typography>Brandon Popp - Systems Analyst/IT</Typography>
                            <Typography>Kaylee Stevens - Graphic Designer/Developer</Typography>
                        </div>
                    </CardContent>
                </Card> */}
            </Grid>
        </Container>
    );
}