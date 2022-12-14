import React, { useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Button } from '@mui/material';




const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// eslint

export default function showStudent() {
  const classes = useStyles();

  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/student').then((allStudents) => {
      setStudentList(allStudents.data);
    })
  }, [])

  return (
    <>
    <h2>Attendees</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.location}</TableCell>
              <TableCell align="right">{student.fee}</TableCell>
              <IconButton aria-label="delete" className={classes.margin}>
                <Button fontSize="small"/>
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
