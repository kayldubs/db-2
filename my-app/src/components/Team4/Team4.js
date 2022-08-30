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

function Featured() {
  const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);

    }



    const handleMouseOut = () => {
        setIsHovering(false);
    }
  return (
    <Grid container spacing={5} style={{
        //display: 'flex',
        position:'relative',
        justifyContent: 'space-evenly',
        marginBottom: '200px',
        alignItems: 'stretch',
    }} >
        <Card sx={{ display: 'flex', outline:'solid', outlineColor:'#6a8aaf' }} 
        style={{backgroundColor:'#d6d6d6', width:'300px'}} 
        >
          <CardContent sx={{ flex: 1 }}>
          <EngineeringRoundedIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#6a8aaf',
            borderRadius:'10px',
            position:'absolute',
            top:'-20px'

          }}/>
            <Typography component="h2" variant="h5">
              
              Arash Samimi
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Regulatory/Quality Engineer
            </Typography>
            </CardContent>
        </Card>
        <Card sx={{ display: 'flex', outline:'solid', outlineColor:'#6a8aaf' }}>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#d6d6d6', width:'300px'}} >
        <PrecisionManufacturingIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#6a8aaf',
            borderRadius:'10px',
            position:'absolute',
            top:'-20px'
          }}/>
            <Typography component="h2" variant="h5">
            Calvin Bond
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Electrical/Mechanical Engineer
            </Typography>
        </CardContent>
        </Card>
        <Card sx={{ display: 'flex', outline:'solid', outlineColor:'#6a8aaf' }}> 
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#d6d6d6', width:'300px'}}>
        <InsightsIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#6a8aaf',
            borderRadius:'10px',
            position:'absolute',
            top:'-20px'
          }}/>
            <Typography component="h2" variant="h5">
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
            sx={{ display: 'flex', outline:'solid', outlineColor:'#6a8aaf' }}>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#d6d6d6', width:'300px'}}>
        <DesignServicesIcon sx={{
            fontSize:40,
            marginLeft:'115px',
            backgroundColor:'#6a8aaf',
            borderRadius:'10px',
            position:'absolute',
            top:'-20px',
          }}/>
            <Typography component="h2" variant="h5">
            Kaylee Stevens
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Graphic Designer/Front End Developer
            </Typography>
            {isHovering && (
            <Typography variant="subtitle2" color="text.secondary">
            Kaylee started in her field with an Associates degree from Miami Dade College with a focus in graphic design. Expanding her skill set she recieved her certification in full stack development from The University of Texas at Austin where she now specializes in UX/UI and front end interface development.
            </Typography>
            )}
          </CardContent>
        </Card>
    </Grid>
  );
}

export default Featured;