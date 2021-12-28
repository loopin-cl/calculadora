import React, { useState, useEffect } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { numberWithDelimiter } from '../components/helpers/numberFormat';

const TotalPointsContainer = ({ totalPoints }) => {
  const [firstWithdrawal, setFirstWithdrawal] = useState(false);

  const [bonusMessage, setBonusMessage] = useState();
  const [bonusPoints, setBonusPoints] = useState();

  const calculateBonus = (maximumBonus = 1000, bonusThreshold = 1000) => {
    if (totalPoints > bonusThreshold) {
      return {message: '¡Tienes 1.000 puntos extra 🍻!', bonus: totalPoints + maximumBonus};
    }
    else {
      return {message: '¡Duplicas tus puntos 🎉!', bonus: totalPoints * 2};
    }
  }

  useEffect(() => {
    const setBonusAlert = () => {
      const {message, bonus} = calculateBonus();
      setBonusMessage(message);
      setBonusPoints(bonus);
    }

    setBonusAlert();

  }, [firstWithdrawal, totalPoints]);

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
            <React.Fragment>
              <p className="total-points-number">
                <span>{ numberWithDelimiter(totalPoints) }</span>
                { numberWithDelimiter(bonusPoints) }
              </p>
              <p className="bonus-message">
                { bonusMessage }
              </p>
            </React.Fragment>
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