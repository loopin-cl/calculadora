import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { XCircle } from 'react-feather';

const DetailedTable = ({ addedPackages, removeSelected }) => {

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
              addedPackages.map(currentPackage => (
                <TableRow 
                  key={currentPackage.package.id}
                >
                  <TableCell>{currentPackage.package.type}</TableCell>
                  <TableCell className="amount">{currentPackage.quantity}</TableCell>
                  <TableCell className="amount">{currentPackage.total_points}</TableCell>
                  <TableCell>
                    <XCircle
                      className="clickeable-icon"
                      onClick={() => removeSelected(currentPackage.package)}
                    />
                  </TableCell>
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