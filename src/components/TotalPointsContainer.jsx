import React, { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { numberWithDelimiter } from '../components/helpers/numberFormat';

const TotalPointsContainer = ({ totalPoints }) => {
  const [firstWithdrawal, setFirstWithdrawal] = useState(false);

  return (
    <React.Fragment>
      {
        totalPoints > 0 && 
        <section className="total-points-container">
          <FormControlLabel
            checked={firstWithdrawal}
            onChange={(e) => setFirstWithdrawal(e.target.checked)}
            control={<Switch color="primary" />}
            label="¿Primer retiro?"
            labelPlacement="start"
          />

          <h2>Total de puntos</h2>

          { 
            firstWithdrawal ? 
            <p className="total-points-number">
              <span>{ numberWithDelimiter(totalPoints) }</span>
              { numberWithDelimiter(totalPoints * 2) }
            </p>
            :
            <p className="total-points-number">
              { numberWithDelimiter(totalPoints) }
            </p>
          }
        </section>
      }
    </React.Fragment>
  );
}

export default TotalPointsContainer;