import React, { useState } from 'react';
import {
  Container, Paper, Card, Grid,
  List, Button, Stack, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle,
} from 'react-icons/bs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IconContext } from 'react-icons';
import BackgroundSVG from './assets/images/bg-sidebar-desktop.svg';

const MainView = () => {
  const steps = [
    {
      name: 'STEP 1',
      sub: 'YOUR INFO',
      icon: <Bs1Circle />,
    },
    {
      name: 'STEP 2',
      sub: 'SELECT PLAN',
      icon: <Bs2Circle />,
    },
    {
      name: 'STEP 3',
      sub: 'ADD-ONS',
      icon: <Bs3Circle />,
    },
    {
      name: 'STEP 4',
      sub: 'SUMMARY',
      icon: <Bs4Circle />,
    },
  ];
  // const [step, SetStep] = useState(1);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: '#EEF5FE',
    }}
    >
      <IconContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ color: 'white' }}
      >

        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Card
            style={{
              alignItems: 'center',
              padding: '20px',
              margin: '20px',
              height: '350px',
              width: '30vh',
              minWidth: '600px',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Paper style={{
                  padding: '5px',
                  margin: '5px',
                  height: '100%',
                  backgroundImage: `url(${BackgroundSVG})`,
                  color: '#FFF',
                }}
                >
                  <List>
                    {steps.map((item, _) => (
                      <ListItem key={item.name} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>

                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                          <ListItemText secondary={item.sub} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Card style={{ padding: '5px', margin: '5px' }} />
                <Stack spacing={2} direction="row">
                  <Button variant="text">Go Back</Button>
                  <Button variant="contained">Next Step</Button>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </IconContext.Provider>
    </div>
  );
};

export default MainView;
