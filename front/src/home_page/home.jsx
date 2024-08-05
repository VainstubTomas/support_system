import './home.css'

export default function Home(){
    

    return(
        <>
            <body>
                <section className="topBar">
                    <div className='logos'>
                        <img src="../public/assets/valkyria.png" alt="Logo Valkyria" style={{maxWidth:'100px'}}/>
                        <img src="../public/assets/ivolution.png" alt="Logo Ivolution" style={{maxWidth:'100px'}}/>
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
