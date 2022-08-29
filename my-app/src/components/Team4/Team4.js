import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Featured() {
  return (
    <Grid container spacing={5} style={{
        //display: 'flex',
        position:'relative',
        justifyContent: 'space-evenly',
        marginBottom: '200px',
        alignItems: 'center',
    }} >
        <Card sx={{ display: 'flex' }} style={{backgroundColor:'#a5dcf3'}} >
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Arash Samimi
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Regulatory/Quality Engineer
            </Typography>
            </CardContent>
        </Card>
        <Card>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#a5dcf3'}} >
            <Typography component="h2" variant="h5">
            Calvin Bond
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Electrical/Mechanical Engineer
            </Typography>
        </CardContent>
        </Card>
        <Card>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#a5dcf3'}}>
            <Typography component="h2" variant="h5">
            Brandon Popp
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Systems Analyst/IT
            </Typography>
            </CardContent>
            </Card>
        <Card>
        <CardContent sx={{ flex: 1 }} style={{backgroundColor:'#a5dcf3'}}>
            <Typography component="h2" variant="h5">
            Kaylee Stevens
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            Graphic Designer/Front End Developer
            </Typography>
          </CardContent>
        </Card>
    </Grid>
  );
}

export default Featured;