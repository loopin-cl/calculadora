import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DetailedTable = ({ addedPackages }) => {

  return (
    <TableContainer>
      {
        addedPackages.length > 0 && <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">Envase</TableCell>
              <TableCell component="th" align="right">Cantidad</TableCell>
              <TableCell component="th" align="right">Puntos</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              addedPackages.map(current_package => (
                <TableRow 
                  key={current_package.package.type}
                >
                  <TableCell>{current_package.package.type}</TableCell>
                  <TableCell className="amount">{current_package.quantity}</TableCell>
                  <TableCell className="amount">{current_package.total_points}</TableCell>
                  <TableCell />
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      }
    </TableContainer>
  );
}

export default DetailedTable;