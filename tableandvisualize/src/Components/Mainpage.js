import React from 'react';
import Demo from './Demo';
import { Grid, Paper, Typography } from '@mui/material';
import TextSphere from './TextSphere';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MainPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <br></br>
            <Typography variant="h5">KEYWORDS COUNT</Typography>
            <Demo />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <br></br>
            <Typography variant="h5">VISUAL BEAUTY OF KEYWORDS</Typography>
            <TextSphere />
            <br></br>
            <Link to="/Analyzer">
              <Button variant="contained" size="small" style={{ backgroundColor: 'red' }}>
                Analyzer
              </Button>
            </Link>
            <Link to="/recommender">
              <Button variant="contained" size="small">
                Recommender
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
