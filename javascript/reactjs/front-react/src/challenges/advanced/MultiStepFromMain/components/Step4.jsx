/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Card, Stack, Box } from '@mui/material';

const Step4 = (plan, addons) => {
  const total = plan.price + addons.price;
  return (
    <div>
      Finishing up
      Double-check everything looks OK before confirming.
      <Card>
        {plan.name} {plan.price}
        {addons.map((item, _) => (
          <div>
            <Stack spacing={2} direction="row" justifyContent="space-between">
              <Box>{item.name}</Box>
              <Box>{item.price}</Box>
            </Stack>
          </div>
        ))}
      </Card>
      Total (total)
    </div>
  );
};

export default Step4;
