import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios'
import './login.css';

const Login = () =>{
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const Enter=()=>{
        navigate('/home_page')
    }

    // const submit = async (e) => { 
    //     e.preventDefault();

    //     const user = {
    //         username: username,
    //         password: password
    //     };

    //     try {
    //         const { data } = await axios.post(
    //             'http://127.0.0.1:8000/token/',
    //             user,
    //             {
    //                 headers: { "Content-Type": "application/json" },
    //                 withCredentials: true
    //             }
    //         );

    //         localStorage.clear();
    //         localStorage.setItem('access_token', data.access);
    //         localStorage.setItem('refresh_token', data.refresh);
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
    //         navigate('/home_page'); 
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //     }
    // };

    return (
        <>
            <main style={{ height: '100vh' }}>
                <section className="companyLogos" style={{ maxWidth: '500px' }}>
                    <img src="/assets/logo.png" alt="Ivolution Logo" style={{ width: '200px' }} />
                </section>

                <section className='loginContainer' style={{ maxWidth: '300px' }}>

                        <div className='loginContent'>
                            <h1>Login</h1>
                            <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            // onSubmit={submit}
                            >
                                <TextField 
                                    id="outlined-basic"
                                    label="Username"
                                    variant="outlined">
                                    <input
                                    placeholder='Enter Username'
                                    name='username' 
                                    type="text" 
                                    // value={username}
                                    required
                                    onChange={e => setUsername(e.target.value)} />
                                </TextField>
                                <TextField 
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    type='password'>
                                    <input
                                    placeholder='Enter Password'
                                    name='password' 
                                    // value={password}
                                    required
                                    onChange={e => setPassword(e.target.value)} />
                                </TextField>
                                <Button variant="contained" style={{ backgroundColor: '#DCBF52' }} type="submit" onClick={Enter}>
                                    Ingresar
                                </Button>
                            </Box>
                        </div>
                </section>

                <section className="supplierLogo" style={{ maxWidth: '500px' }}>
                    <img src="/assets/by.png" alt="Ivolution Logo" style={{ width: '200px' }} />
                </section>
            </main>
        </>
    );
}

export default Login;