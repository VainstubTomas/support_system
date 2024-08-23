import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; //Para hacer las solicitudes http
import { useState } from 'react';

import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                username: username,
                password: password,
            });

            // Guardar el token JWT en el almacenamiento local (localStorage)
            localStorage.setItem('token', response.data.jwt);

            // Redirigir a la página principal después de un login exitoso
            navigate('/home_page');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Puedes manejar el error, como mostrar un mensaje en la UI
        }
    };

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
                            onSubmit={handleLogin} //asocia la funcion de logeo con el submit del formulario
                        >
                            <TextField 
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                name="username"
                                type="text"
                                required
                                value={username} //lo toma de arriba
                                onChange={(e)=>setUsername(e.target.value)} //captura el valor del input
                            />
                            <TextField 
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                name="password"
                                type="password"
                                required
                                value={password} //lo toma de arriba
                                onChange={(e)=>setPassword(e.target.value)} //captura el valor del input
                            />
                            <Button 
                                variant="contained" 
                                style={{ backgroundColor: '#DCBF52' }} 
                                type="submit" 
                            >
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
