import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'

export default function Login(){
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
                            <TextField id="outlined-basic" label="User" variant="outlined" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <Button variant="contained" style={{backgroundColor: '#DCBF52'}}>Ingresar</Button>
                        </Box>
                    </div>
                </section>
            </main>
        </>
    )
}