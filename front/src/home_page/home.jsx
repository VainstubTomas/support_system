import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import './home.css'

export default function Home(){
    return(
        <>
            <body>
                <section className="topBar">
                    <img src="../public/assets/logo.png" alt="Logo Valkyria" style={{maxWidth:'100px'}}/>
                    <img src="../public/assets/ivolution.png" alt="Logo Ivolution" style={{maxWidth:'100px'}}/>
                </section>

                <section className='toDoList'>
                    <div className='toDo'>
                        <div className='headSituation'>
                            <p className='titleSituation'>to-do</p>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <Fab color="grey" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Box>
                        </div>
                        <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 350,
                            height: 128,
                            },
                        }}
                        >
                            <Paper elevation={5}>
                                <p>Ivolution</p>
                            </Paper>
                        </Box>
                    </div>
                    <div className='inProgress'>
                        <div className='headSituation'>
                            <p className='titleSituation'>in progress</p>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <Fab color="grey" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Box>
                        </div>
                        <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 350,
                            height: 128,
                            },
                        }}
                        >
                            <Paper elevation={5}>
                                <p>Ivolution</p>
                            </Paper>
                        </Box>
                    </div>
                    <div className='complete'>
                        <div className='headSituation'>
                            <p className='titleSituation'>complete</p>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <Fab color="grey" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Box>
                        </div>
                        <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 350,
                            height: 128,
                            },
                        }}
                        >
                            <Paper elevation={5}>
                                <p>Ivolution</p>
                            </Paper>
                        </Box>
                    </div>
                </section>
            </body>
        </>
    )
}