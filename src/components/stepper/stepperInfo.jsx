import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'My bag',
  'Information',
  'Shipping',
  'Payment',
];

export default function StepperInfo() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <Box sx={{ width: '70%' }}>
   
      <Stepper activeStep={2} alternativeLabel className='my-10 '>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </Box>
    </div>
  );
}