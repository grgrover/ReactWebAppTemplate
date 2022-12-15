import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './css/generalInfo.css'
import axios from 'axios';


export default function GeneralInfo({ traveler, status }) {
  const [conference, setConference] = useState('')
  const [expenses, setExpenses] = useState('')
  const [funds, setFunds] = useState('')

  const handleSubmit = (e) => {
    const config = {
      url: 'http://localhost:3000/',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        conference: conference,
        expenses: expenses,
        funds: funds,
      }
    }
    axios(config)
      .then(() => {
        console.log(success)
      })
      .catch(err => {
        console.debug(err)
      })

  }

  const handleChangeConference = (e) => {
    setConference(e.target.value)
  }
  const handleChangeExpenses = (e) => {
    setExpenses(e.target.value)
  }
  const handleChangeFunds = (e) => {
    setFunds(e.target.value)
  }

  useEffect(() => {

  }, [])

  return (
    <div className="GeneralInfo">
      <Stack spacing={2} direction="row">
        <Link to='/'>
          <Button variant="contained">General Info</Button>
        </Link>
        <Link to='/destination'>
          <Button variant="contained">Destination</Button>
        </Link>
      </Stack>


      <Stack spacing={2} direction="row">
        <div className='demographics'>
          <span>Traveler: {traveler}</span>
          <span> Trip Req #</span>
          <span> Status: {status}</span>
        </div>
      </Stack>

      <Stack spacing={2} direction="row">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Is this a conference?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-conference"
            value={conference}
            onChange={handleChangeConference}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Lodging expenses?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-expenses"
            value={expenses}
            onChange={handleChangeExpenses}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Reimbursable funds?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-funds"
            value={funds}
            onChange={handleChangeFunds}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}