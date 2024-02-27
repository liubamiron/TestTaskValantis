import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export class Home extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <h1 className='center'> Home page</h1>
        <Typography sx={{ minWidth: 100 }}><Link to = '/'>Home</Link></Typography>
        <Typography sx={{ minWidth: 100 }}><Link to ='/products'>Products</Link></Typography>
      </Box>

    )
  }
}

export default Home