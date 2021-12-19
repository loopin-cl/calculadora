import React, { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const TotalPointsContainer = ({ totalPoints }) => {
  const [firstWithdrawal, setFirstWithdrawal] = useState(false);

  return (
    <React.Fragment>
      {
        totalPoints > 0 && 
        <section>
          <FormControlLabel
            checked={firstWithdrawal}
            onChange={(e) => setFirstWithdrawal(e.target.checked)}
            control={<Switch color="primary" />}
            label="¿Primer retiro?"
            labelPlacement="start"
          />

          <h2>Total de puntos</h2>
          <p>

            { 
              firstWithdrawal ? 
              totalPoints * 2 
              :
              totalPoints
            }
          </p>
        </section>
      }
    </React.Fragment>
  );
}

export default TotalPointsContainer;