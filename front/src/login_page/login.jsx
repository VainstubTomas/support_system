import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './login.css'

export default function Login(){
    const navigate = useNavigate()

    const touch = () => {
        navigate('/home_page')
    }

    return(
        <>
            <main style={{height:'100vh'}}>
                <section className="companyLogos" style={{maxWidth:'500px'}}>
                    <img src="/assets/logo.png" alt="Ivolution Logo" style={{width:'200px'}}/>
                </section>

                <section className='incomeContainer' style={{maxWidth:'300px'}}>
                    <h1>Login</h1>
                    <div className='incomeInPuts'>
                        <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="User" variant="outlined"/>
                            <TextField id="outlined-basic" label="Password" variant="outlined" type='password'/>
                            <Button variant="contained" style={{backgroundColor: '#DCBF52'}} onClick={touch}>Ingresar</Button>
                        </Box>
                    </div>
                </section>

                <section className="supplierLogo" style={{maxWidth:'500px'}}>
                    <img src="/assets/by.png" alt="Ivolution Logo" style={{width:'200px'}}/>
                </section>
            </main>
        </>
    )
}