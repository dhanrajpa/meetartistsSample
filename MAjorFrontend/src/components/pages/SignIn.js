import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();


function Signin() {
	const [checkemail, setEmail] = useState('');
    const [checkpassword, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
		let data =
        {
            email: checkemail, password: checkpassword
        }

    console.log(data);
		  axios.get("http://localhost:8080/api/users/", data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);

            }).catch((err) => console.log(err + "Incorrect Data"));

     }

	

	  return (
		<div id='d1'>
		<ThemeProvider theme={theme}>
		  <Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box onSubmit={handleSubmit}
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
				Sign in
			  </Typography>
			  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<TextField onChange={handleEmailChange}
				  margin="normal"
				  required
				  fullWidth
				  id="email"
				  label="Email Address"
				  name="email"
				  autoComplete="email"
				  autoFocus
				/>
				<TextField onChange={handlePasswordChange}
				  margin="normal"
				  required
				  fullWidth
				  name="password"
				  label="Password"
				  type="password"
				  id="password"
				  autoComplete="current-password"
				/>
				<Button 
				  type="submit"
				  fullWidth
				  variant="contained"
				  sx={{ mt: 3, mb: 2 }}
				>
				  Sign In
				</Button>
				<Grid container>
				  <Grid item xs>
					<Link href="#" variant="body2">
					  Forgot password?
					</Link>
				  </Grid>
				  <Grid item>
					<Link href="/sign-up" variant="body2">
					  {"Don't have an account? Sign Up"}
					</Link>
				  </Grid>
				</Grid>
			  </Box>
			</Box>
		  </Container>
		</ThemeProvider>
		</div>
	  );
}

export default Signin;

                                
    {/* "name":"swapnil",
    "contact":9028034090,
    "address":"satara",
    "proffession":"developer",
    "email":"swappy@gmail.com",
    "password":"swappy",
    "confirmPassword":"swappy",
    "like":true */}
                       

	//http://localhost:8080/api/users/login
	//get-body-raw-json
	// // {
    // //     "email": "ashvini@gmail.com",
    // //     "password": "akash"
    // // }

	//http://localhost:8080/api/users/--post
// 	{
//     "name":"aghav",
//     "contact":"12345678",
//     "address":"dsvfvfb",
//     "proffession":"akash",
//     "email":"ashvini@gmail.com",
//     "password":"akash",
//     "confirmPassword":"akash",
//     "like":true
// }