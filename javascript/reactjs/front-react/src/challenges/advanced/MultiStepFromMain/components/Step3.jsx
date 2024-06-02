import React, { useState } from 'react';
import {
  Stack, Card, ButtonBase, Checkbox,
} from '@mui/material';

const Step3 = () => {
  const addons = [
    {
      name: 'Online service',
      sub: 'Access to multiplayer games',
      price: 1,
    },
    {
      name: 'Larger storage',
      sub: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      name: 'Customizable Profile',
      sub: 'Custom theme on your profile',
      price: 2,
    },
  ];
  const [selectedAddons, setSelectedAddons] = useState([]);
  const handleClickCard = (value) => {
    setSelectedAddons(selectedAddons.concat(value));
  };
  return (
    <div>
      Pick add-ons
      Add-ons help enhance your gaming experience.

      {addons.map((item, _) => (
        <ButtonBase onClick={handleClickCard(item.name)} style={{ display: 'block', textAlign: 'inherit' }}>
          <Card style={{
            backgroundColor: selectedAddons.includes(item.name) ? '#F8F9FE' : 'normal',
            borderColor: selectedAddons.includes(item.name) ? '#7D77CD' : 'normal',
          }}
          >
            <Stack direction="row" style>
              <Checkbox style={{
                volor: selectedAddons.includes(item.name) ? '#7D77CD' : 'normal',
              }}
              />
              <Stack direction="column">
                {item.name}
                {item.sub}
              </Stack>
              +${item.price}/mo
            </Stack>
          </Card>
        </ButtonBase>
      ))}
    </div>
  );
};

export default Step3;
