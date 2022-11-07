import  React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function CreateStudent() {
    const classes = useStyles();

    const [student, setStudent] = useState({
        regNo: 0,
        studentName: '',
        location: '',
        fee: 0

    });
    
    const createStudent = () => {
        axios.post('http://localhost:5000/student', student).then(() => {
            window.location.reload(false);
        })
    }
    

    return (
        <>
        <h2>Sign Up</h2>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="First Name" variant="outlined" value={student.regNo} onChange={(event) => 
            setStudent({ ...student, regNo: event.target.value})
            }></TextField>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={student.studentName} onChange={(event) => 
            setStudent({ ...student, studentName: event.target.value})
            }></TextField>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={student.location} onChange={(event) => 
            setStudent({ ...student, location: event.target.value})
            }></TextField>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={student.fee} onChange={(event) => 
            setStudent({ ...student, fee: event.target.value})
            }></TextField>
            <Button variant="outlined" onClick={CreateStudent}>Submit</Button> 
        </form>
        </>
    )
}