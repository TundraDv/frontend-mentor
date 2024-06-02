import React from 'react';
import { Typography, Container } from '@mui/material';
import IconCheckmark from '../assets/images/icon-checkmark.svg';

const Thanks = () => {
  return (
    <Container>
      <IconCheckmark />
      <Typography variant="h2" color="initial">
        Thank you!
      </Typography>
      <Typography variant="h2" color="initial">
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </Typography>
    </Container>
  );
};
