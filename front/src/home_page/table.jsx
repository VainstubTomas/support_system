import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Phone</TableCell>
            <TableCell style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Email</TableCell>
            <TableCell style={{ whiteSpace: 'nowrap', fontWeight: 'bold' }}>Problem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" style={{ wordWrap: 'break-word', maxWidth: '200px' }}>
                {row.complete_name}
              </TableCell>
              <TableCell style={{ wordWrap: 'break-word', maxWidth: '200px' }}>{row.phone_number}</TableCell>
              <TableCell style={{ wordWrap: 'break-word', maxWidth: '200px' }}>{row.email}</TableCell>
              <TableCell style={{ wordWrap: 'break-word', maxWidth: '200px' }}>{row.problem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

