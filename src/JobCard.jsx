import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function JobCard({ jobData }) {
  const [showMore, setShowMore] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleShowMoreClick = () => {
    setOpenDialog(true); // Open the dialog
  };

  const handleClose = () => {
    setOpenDialog(false); // Close the dialog
  };
  

  return (
    <Card sx={{ maxWidth: 350, minHeight: 500 }}>
      <CardContent>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* Flex container for logo and company name */}
          <img src={jobData.logoUrl} alt="Company Logo" style={{ width: '50px', marginRight: '10px' }} /> {/* Adjust styles as needed */}
          <Typography variant="h4" component="div" sx={{fontWeight: 500}}>
            {jobData.companyName}
          </Typography>
        </div>
        <Typography variant="h7" component="div" sx={{ mt: 2 , fontFamily: 'roboto'}}>
        {jobData.jobRole.toUpperCase()}
        </Typography>
        <Typography variant="h7" component="div" sx={{fontFamily: 'roboto'}}>
          {jobData.location.toUpperCase()}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {jobData.minJdSalary ? `Estimated Salary: ${jobData.minJdSalary} - ${jobData.maxJdSalary} ${jobData.salaryCurrencyCode}` : <></>} 
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          {showMore ? (
            jobData.jobDetailsFromCompany
          ) : (
            <>
              <p style={{fontWeight: 'bold'}}>Job Description:</p>{jobData.jobDetailsFromCompany.slice(0, 500)}...
              <Link href="#" onClick={handleShowMoreClick} underline="none">
                <span style={{ color: '#007bff' }}>Show more</span>
              </Link>
            </>
          )}
        </Typography>

        {/* Dialog for full description */}
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>{jobData.jobRole}</DialogTitle> {/* Add title */}
          <DialogContent>
            <Typography variant="body2">
              {jobData.jobDetailsFromCompany} 
            </Typography>
          </DialogContent>
        </Dialog>
        {jobData.minExp ? <Typography sx={{ mb: 1.5,mt: 2 }} color="text.secondary">
          Experience: {jobData.minExp}-{jobData.maxExp} years
        </Typography> : <></>}

        <div style={{display: 'flex', marginTop: '20px', marginBottom: '10px', justifyContent: 'center' }}> 
  <Button variant="contained" sx={{ display: 'flex', mt: 2, justifyContent: 'center', backgroundColor: '#4caf50' }}>
  <Link 
        href={jobData.jdLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        underline="none" 
      sx = {{color: 'Black'}}>
        Easy Apply
      </Link> 
  </Button>
</div>
        
      </CardContent>
    </Card>
  );
}

export default JobCard;
