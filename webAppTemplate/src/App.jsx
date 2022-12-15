import React, { useEffect, useState } from 'react';
import Header from './components/header.jsx';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import GeneralInfo from './components/GeneralInfo.jsx'
import Destination from './components/Destination.jsx'


function App() {

  const traveler = 'Tony'
  const status = 'Full Cost Detail'

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <h1>New Trip: Full Cost Detail</h1>
              <GeneralInfo traveler={traveler} status={status} />
            </>
          }>
          </Route>
          <Route path="/destination" element={
            <>
              <Header />
              <h1>New Trip: Full Cost Detail</h1>
              <Destination />
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
