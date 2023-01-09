import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import InsightsIcon from '@mui/icons-material/Insights';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../Team/mediaQueries.css'

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


function Featured() {
  const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }
  return (
    <Grid container spacing={{xs: 1, xl:1}} mt={{xs:'50px'}} rowGap={{xl: 1}} className='employeeGrid' style={{
        justifyContent: 'center',
        marginBottom: '200px',
        alignItems: 'stretch',
        
    }} >
        <Card sx={{ display: 'flex', outline:'solid', outlineColor:'#8f8f8f' }} 
        style={{backgroundColor:'#d6d6d6', width:'300px', margin: '20px'}} 
        >
          <CardContent sx={{ flex: 1 }}>
          <EngineeringRoundedIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#8f8f8f',
            borderRadius:'10px',
            position:'relative',
            top:'0px'

          }}/>
            <Typography component="h2" variant="h5" style={{paddingTop:'20px'}}>
              
              Arash Samimi
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Regulatory/Quality Engineer
            </Typography>
            </CardContent>
        </Card>
        <Card sx={{ display: 'flex', outline:'solid', outlineColor:'#8f8f8f' }} style={{margin: '20px'}}>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#d6d6d6', width:'300px'}} >
        <PrecisionManufacturingIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#8f8f8f',
            borderRadius:'10px',
            position:'relative',
            top:'0px'
          }}/>
            <Typography component="h2" variant="h5" style={{paddingTop:'20px'}}>
            Calvin Bond
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Electrical/Mechanical Engineer
            </Typography>
        </CardContent>
        </Card>
        <Card sx={{ display: 'flex', outline:'solid', outlineColor:'#8f8f8f' }} style={{margin: '20px'}}> 
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#d6d6d6', width:'300px'}}>
        <InsightsIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#8f8f8f',
            borderRadius:'10px',
            position:'relative',
            top:'0px'
          }}/>
            <Typography component="h2" variant="h5" style={{paddingTop:'20px'}}>
            Brandon Popp
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Systems Analyst/IT
            </Typography>
            </CardContent>
            </Card>
        <Card 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            sx={{ display: 'flex', outline:'solid', outlineColor:'#8f8f8f' }}
            style={{margin: '20px'}}>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#d6d6d6', width:'300px'}}>
        <DesignServicesIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#8f8f8f',
            borderRadius:'10px',
            position:'relative',
            top:'0px',
          }}/>
            <Typography component="h2" variant="h5" style={{paddingTop:'20px'}}>
            Kaylee Stevens
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Graphic Designer/Developer
            </Typography>
            {/* {isHovering && (
            <Typography variant="subtitle2" color="text.secondary">
            Kaylee started in her field with an Associates degree from Miami Dade College with a focus in graphic design. Expanding her skill set she recieved her certification in full stack development from The University of Texas at Austin where she now specializes in UX/UI and front end interface development.
            </Typography>
            )} */}
          </CardContent>
        </Card>
    </Grid>
  );
}

export default Featured;