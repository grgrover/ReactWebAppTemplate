import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import './css/destination.css';


export default function Destination() {
  const [cityName, setCityName] = useState('')

  const handleCityName = (e) => {
    setCityName(e.target.value)

  }



  return (
    <div className="Destination">
      <Stack spacing={2} direction="row">
        <Link to='/'>
          <Button variant="contained">General Info</Button>
        </Link>
        <Link to='/destination'>
          <Button variant="contained">Destination</Button>
        </Link>
      </Stack>

      <FormControl fullWidth sx={{ m: 1, paddingTop: '20px' }} variant="filled" className='destinationInput'>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Destination City Name"
          value={cityName}
          onChange={handleCityName}
        />
      </FormControl>
      <Button variant="contained" >Submit</Button>
    </div>
  );
}