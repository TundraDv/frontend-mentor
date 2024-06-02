import React, { useState } from 'react';
import {
  Container, Paper, Button, ButtonBase, TextField, Grid, Card, Stack, Switch, Typography,
} from '@mui/material';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconArcade from '../assets/images/icon-arcade.svg';
import IconPro from '../assets/images/icon-pro.svg';

const Step1 = () => {
  const plans = [
    {
      name: 'Arcade',
      icon: IconArcade,
      price: 9,
    },
    {
      name: 'Advanced',
      icon: IconAdvanced,
      price: 12,
    },
    {
      name: 'Pro',
      icon: IconPro,
      price: 15,
    },
  ];
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const handleChangeSwitch = () => {
    setIsMonthly(!isMonthly);
  };
  const handleClickCard = (value) => {
    setSelectedPlan(value);
  };

  return (
    <div>
      Select your plan
      You have the option of monthly or yearly billing.

      <Grid container spacing={2}>
        {plans.map((item, _) => (
          <Grid item xs={12} sm={4}>
            <ButtonBase onClick={handleClickCard(item.name)} style={{ display: 'block', textAlign: 'inherit' }}>
              <Card style={{
                backgroundColor: item.name === selectedPlan ? '#F8F9FE' : 'normal',
                borderColor: item.name === selectedPlan ? '#7D77CD' : 'normal',
              }}
              >
                {item.icon}
                {item.name}
                {isMonthly
                  ? (
                    <div>
                      ${item.price}/mo
                    </div>
                  )
                  : (
                    <div>
                      ${item.price}*10/mo
                      2 months free
                    </div>
                  )}
              </Card>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} direction="row" style={{ backgroundColor: '#F8F9FE', borderRadius: '5%' }}>
        <Typography variant="body1" style={{ marginRight: 8, color: isMonthly ? 'primary' : 'gray' }}>
          Monthly
        </Typography>
        <Switch defaultChecked onChange={handleChangeSwitch} />
        <Typography variant="body1" style={{ marginLeft: 8, color: !isMonthly ? 'primary' : 'gray' }}>
          Yearly
        </Typography>
      </Stack>
    </div>
  );
};

export default Step1;
