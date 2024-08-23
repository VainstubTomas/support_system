import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import './home.css'

export default function Home (){

     const Navigate = useNavigate()

     const Exit = () =>{
        Navigate('/')
     }

    return(
        <>
            <body>
                <section className="topBar">
                    <div className='logos'>
                        <div className='logos_principal'>
                            <img src="/assets/valkyria.png" alt="Logo Valkyria" style={{maxWidth:'100px'}}/>
                            <img src="/assets/by.png" alt="Logo Ivolution" style={{maxWidth:'100px'}}/>
                        </div>
                        <LogoutIcon onClick={Exit} className='logOutIcon'/>
                    </div>
                </section>

                <section className='toDoList'>
                    <div className='toDo'>
                        <div className='headSituation'>
                            <p className='titleSituation'>to-do</p>
                        </div>
                    </div>
                    <div className='inProgress'>
                        <div className='headSituation'>
                            <p className='titleSituation'>in progress</p>
                        </div>
                    </div>
                    <div className='complete'>
                        <div className='headSituation'>
                            <p className='titleSituation'>complete</p>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

