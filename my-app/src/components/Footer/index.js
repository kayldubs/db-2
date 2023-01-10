



import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './footer.css'

import logo  from '../../assests/imgs/DBSoloLogo.svg';

function Copyright() {
  return (
    <Typography color="text.secondary" className='copyright'>
      {'Copyright © '}
      <Link color="inherit" href="/">
        DigiBeat
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 1,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container className='footer1'>
        <div className='footer' alignContent="stretch">
        <div className='footerType'>
          <Typography variant="body1" >
            Contact
          </Typography>
          <Typography className=''>
              Support@digibeat.health
          </Typography>
          </div>
          <div className='section2' style={{paddingBottom:'200px'}}>
          <Typography variant="body1" >
            Navigation
        </Typography>
          <Link color="inherit" href="/" >
        Home
      </Link>
      <Link color="inherit" href="/faq">
        FAQ
      </Link>
      <Link color="inherit" href="/about">
        About
      </Link>
      </div>
      <div className='footerType'>
          {/* <Card>
              <CardMedia
              sx={{
                '& .MuiCard-root': {
                  style:'image'
                }
              }}
              image={logo}
              component='logo'
              alt='DigiBeat logo'
              />
          </Card> */}
      </div>
      <div className='section2'>
      <Typography variant="body1">
            Regulatory
        </Typography>
        <Link color="inherit" href="/">
        ISO
      </Link>
      <Link color="inherit" href="/">
        510(k)
      </Link>
      <Link color="inherit" href="/">
        HIPPA
      </Link>
      <Link color="inherit" href="/">
        FICO Policy
      </Link>
      </div>
      <div className='section2' style={{marginBottom:'180px'}}>
      <Typography variant="body1">
            Resources
        </Typography>
        <Link color="inherit" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7407266/">
        Health Monitoring Devices
      </Link>
      <Link color="inherit" href="https://pubmed.ncbi.nlm.nih.gov/24598902/">
        Chronic Disease Intervention
      </Link>
      <Link color="inherit" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5240011/">
        Remote Patient Monitoring
      </Link>
      <Link color="inherit" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3481514/">
        Telehealth for COPD
      </Link>
      </div>
      </div>
          <Copyright />
        </Container>
       </Box>
    // </Box>
  );
}

export default Footer;