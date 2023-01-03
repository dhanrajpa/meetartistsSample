import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
import { FormEvent, useState, ChangeEvent } from "react";
import { callbackify } from "util";
import React from "react";

const theme = createTheme();

const schema = yup.object().shape({
    FirstName: yup
      .string()
      .required()
      .min(1, "FirstName Should be atleast 6 character")
      .max(20, "FirstName must not exceeds 20 character"),
    LastName: yup
      .string()
      .required()
      .min(1, "LastName Should be atleast 6 character")
      .max(20, "LastName must not exceeds 20 character"),
    Email: yup.string().email().required().email("Email is Invalid"),
    Address: yup.string().required(),
    Role: yup.string().required(),
    Password: yup
      .string()
      .required()
      .min(6, "password must be atleast 6 character")
      .max(15, "password must not exceed 15 character"),
  });
  
  

function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };


      const navigate=useNavigate();
      const nav=()=>{
          navigate('/login');
      }

  const submitForm = (data: any) => {
    console.log("data : ", data);
    Axios.post("http://localhost:3001/insert", data)
    .then(() => {
        alert("Registered Successfully");
        nav();
    });
  };

    return (
        <div id='div_reg'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box id="card"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="FirstName"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="lastName"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="LastName"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Art Form"
                                        required
                                        fullWidth
                                        id="Art Form"
                                        label="Art Form"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Profession"
                                        required
                                        fullWidth
                                        id="Profession"
                                        label="Profession"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Address"
                                        required
                                        fullWidth
                                        id="Address"
                                        label="Address"
                                        autoFocus
                                    />
                                </Grid>

                                
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Contact"
                                        label="Contact"
                                        type="Contact"
                                        id="Contact"
                                        autoFocus
                                    />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField  
                                        required    
                                        fullWidth   
                                        id="email"  
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                               <Select
        
         autoComplete="given-name"
         name="Gender"
         required
         fullWidth
         id="Gender"
         label="Gender"
         autoFocus
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          
        </Select>
                               
                            </Grid>
                                <Grid item xs={12} sm={6} >
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                               <Select
        
         autoComplete="given-name"
         name="Role"
         required
         fullWidth
         id="Role"
         label="Role"
         autoFocus
        
        >
          <MenuItem value={10}>Artist</MenuItem>
          <MenuItem value={20}>User</MenuItem>
          
        </Select>
                               
                            </Grid>
                              

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Confirm password"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                               
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Link href="/sign-in" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

        </div>
    )
}
export default Signup;

// {/* "name":"swapnil",
//     "contact":9028034090,
//     "address":"satara",
//     "proffession":"developer",
//     "email":"swappy@gmail.com",
//     "password":"swappy",
//     "confirmPassword":"swappy",
//     "like":true */}


// import React, { useState, useEffect } from 'react'
// import { Grid, } from '@material-ui/core';
// import Controls from "../../components/controls/Controls";
// import { useForm, Form } from '../pages/useForm';
// import signupService from "../services/signupService"



// const genderItems = [
//     { id: 'male', title: 'Male' },
//     { id: 'female', title: 'Female' },
//     { id: 'other', title: 'Other' },
// ]

// const initialFValues = {
//     id: 0,
//     fullName: '',
//     email: '',
//     mobile: '',
//     city: '',
//     gender: 'male',
//     departmentId: '',
//     hireDate: new Date(),
//     isPermanent: false,
// }

// function SignUp()  {

//     const validate = (fieldValues = values) => {
//         let temp = { ...errors }
//         if ('fullName' in fieldValues)
//             temp.fullName = fieldValues.fullName ? "" : "This field is required."
//         if ('email' in fieldValues)
//             temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
//         if ('mobile' in fieldValues)
//             temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
//         if ('departmentId' in fieldValues)
//             temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
//         setErrors({
//             ...temp
//         })

//         if (fieldValues == values)
//             return Object.values(temp).every(x => x == "")
//     }

//     const {
//         values,
//         setValues,
//         errors,
//         setErrors,
//         handleInputChange,
//         resetForm
//     } = useForm(initialFValues, true, validate);

//     const handleSubmit = e => {
//         e.preventDefault()
//         if (validate()){
//           signupService.insertEmployee(values)
//             resetForm()
//         }
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Grid container>
//                 <Grid item xs={6}>
//                     <Controls.Input
//                         name="fullName"
//                         label="Full Name"
//                         value={values.fullName}
//                         onChange={handleInputChange}
//                         error={errors.fullName}
//                     />
//                     <Controls.Input
//                         label="Email"
//                         name="email"
//                         value={values.email}
//                         onChange={handleInputChange}
//                         error={errors.email}
//                     />
//                     <Controls.Input
//                         label="Mobile"
//                         name="mobile"
//                         value={values.mobile}
//                         onChange={handleInputChange}
//                         error={errors.mobile}
//                     />
//                     <Controls.Input
//                         label="City"
//                         name="city"
//                         value={values.city}
//                         onChange={handleInputChange}
//                     />

//                 </Grid>
//                 <Grid item xs={6}>
//                     <Controls.RadioGroup
//                         name="gender"
//                         label="Gender"
//                         value={values.gender}
//                         onChange={handleInputChange}
//                         items={genderItems}
//                     />
//                     <Controls.Select
//                         name="departmentId"
//                         label="Department"
//                         value={values.departmentId}
//                         onChange={handleInputChange}
//                         options={signupService.getDepartmentCollection()}
//                         error={errors.departmentId}
//                     />
//                     <Controls.DatePicker
//                         name="hireDate"
//                         label="Hire Date"
//                         value={values.hireDate}
//                         onChange={handleInputChange}
//                     />
//                     <Controls.Checkbox
//                         name="isPermanent"
//                         label="Permanent Employee"
//                         value={values.isPermanent}
//                         onChange={handleInputChange}
//                     />

//                     <div>
//                         <Controls.Button
//                             type="submit"
//                             text="Submit" />
//                         <Controls.Button
//                             text="Reset"
//                             color="default"
//                             onClick={resetForm} />
//                     </div>
//                 </Grid>
//             </Grid>
//         </Form>
//     )
// }
//  
