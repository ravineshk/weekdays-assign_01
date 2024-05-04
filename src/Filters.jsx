import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Filters({
  setMinExpFilter,
  setCompanyNameFilter,
  setLocationFilter,
  setRemoteFilter,
  setTechStackFilter,
  setRoleFilter, 
  minExp, 
  companyName, 
  location, 
  remote, 
  techStack, 
  jobRole, 
  minPay,
  setMinPayFilter
  }) {

  const handleMinExpChange = (event) => {
    setMinExpFilter(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyNameFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleRemoteFilterChange = (event) => {
    setRemoteFilter(event.target.checked);
  };

  const handleTechStackChange = (event) => {
    setTechStackFilter(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleMinPayChange = (event) => {
    setMinPayFilter(event.target.value);
  }

  return (
    <>
      <div className="filter-container" style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FormControl sx={{ minWidth: 120, marginRight: '10px' }}>
          <InputLabel id="min-exp-filter-label">Min Exp</InputLabel>
          <Select
            labelId="min-exp-filter-label"
            id="min-exp-filter"
            value={minExp}
            label="Min Exp"
            onChange={handleMinExpChange}
          >
            <MenuItem value={0}>0 yrs</MenuItem>
            <MenuItem value={1}>1 yr</MenuItem>
            <MenuItem value={2}>2 yrs</MenuItem>
            <MenuItem value={3}>3 yrs +</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Company Name"
          variant="outlined"
          value={companyName}
          onChange={handleCompanyNameChange}
          sx={{ minWidth: 150, marginRight: '10px' }}
        />
        <FormControl sx={{ minWidth: 150, marginRight: '10px' }}>
          <InputLabel id="location-filter-label">Location</InputLabel>
          <Select
            labelId="location-filter-label"
            id="location-filter"
            value={location}
            label="Location"
            onChange={handleLocationChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Delhi NCR">Delhi NCR</MenuItem>
            <MenuItem value="Mumbai">Mumbai</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>


          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox checked={remote} onChange={handleRemoteFilterChange} />}
          label="Remote"
        />
        <TextField
          label="Tech Stack"
          variant="outlined"
          value={techStack}
          onChange={handleTechStackChange}
          sx={{ minWidth: 150, marginRight: '10px' }}
        />
        <TextField
          label="Role"
          variant="outlined"
          value={jobRole}
          onChange={handleRoleChange}
          sx={{ minWidth: 150 }}
        />
        <FormControl sx={{ minWidth: 120, marginRight: '10px' }}>
          <InputLabel id="min-exp-filter-label">Min base Pay</InputLabel>
          <Select
            labelId="min-pay-filter-label"
            id="min-pay-filter"
            value={minPay}
            label="Min Pay"
            onChange={handleMinPayChange}
          >
            <MenuItem value={0}>0 - 20 USD</MenuItem>
            <MenuItem value={1}>20 - 50 USD</MenuItem>
            <MenuItem value={2}>50 - 70 USD</MenuItem>
            <MenuItem value={3}>70+ USD </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default Filters;
