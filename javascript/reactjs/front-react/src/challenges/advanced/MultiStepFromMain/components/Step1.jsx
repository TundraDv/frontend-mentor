import React, { useState } from 'react';
import {
  Container, Paper, Button, TextField,
} from '@mui/material';

const Step1 = () => {
  return (
    <div>
      Personal Info
      Please provide your name, email address, and phone number.

      Name
      <TextField id="name" label="e.g. Stephen King" variant="outlined" />

      Email Address
      <TextField id="email" label="e.g. stephenking@lorem.com" variant="outlined" />

      Phone Number
      <TextField id="phone" label="e.g. +1 234 567 890" variant="outlined" />

      <Button variant="next" href="#text-buttons">
        Next Step
      </Button>
    </div>
  );
};

export default Step1;
