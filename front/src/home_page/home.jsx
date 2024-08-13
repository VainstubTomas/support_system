import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './home.css'

export default function Home (){
    // const [message, setMessage] = useState('');
    //  useEffect(() => {
    //     if(localStorage.getItem('access_token') === null){                   
    //         window.location.href = '/'
    //     }
    //     else{
    //      (async () => {
    //        try {
    //          const {data} = await axios.get(   
    //                         'http://localhost:8000/home/', {
    //                          headers: {
    //                             'Content-Type': 'application/json'
    //                          }}
    //                        );
    //          setMessage(data.message);
    //       } catch (e) {
    //         console.log('not auth')
    //       }
    //      })()};
    //  }, []);

    //  useEffect(() => {
    //     (async () => {
    //       try {
    //         const {data} = await  
    //               axios.post('http://localhost:8000/logout/',{
    //               refresh_token:localStorage.getItem('refresh_token')
    //               } ,{headers: {'Content-Type': 'application/json'}},  
    //               {withCredentials: true});
    //         localStorage.clear();
    //         axios.defaults.headers.common['Authorization'] = null;
    //         window.location.href = '/login'
    //         } catch (e) {
    //           console.log('logout not working', e)
    //         }
    //       })();
    //  }, []);

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

