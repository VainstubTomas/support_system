import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import BasicTable from './table';
import LogoutIcon from '@mui/icons-material/Logout';
import './home.css';

export default function Home() {

  const Navigate = useNavigate();

  const Exit = () => {
    Navigate('/');
  };

  const [formData, setFormData] = useState({
    complete_name: '',
    phone_number: '',
    email: '',
    problem: '',
  });

  const [rows, setRows] = useState([]);

  // useEffect para obtener los clientes cuando el componente se monta
  useEffect(() => {
    // Cargar los clientes guardados en localStorage al montar el componente
    const savedRows = JSON.parse(localStorage.getItem('clients')) || [];

    if (savedRows.length > 0) {
      setRows(savedRows);
    }

    // Puedes seguir obteniendo los datos del servidor si es necesario
    axios
      .get('http://127.0.0.1:8000/') // Cambia esta URL por la correcta de tu servidor
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los clientes:', error);
      });
  }, []); // [] asegura que se ejecute solo una vez al montarse el componente

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleAdd = () => {
    axios
      .post('http://127.0.0.1:8000/', formData) // Cambia la URL si es necesario
      .then((response) => {
        // Actualiza la tabla con el nuevo informe
        const updatedRows = [...rows, formData];
        setRows(updatedRows);

        // Guardar los clientes en localStorage
        localStorage.setItem('clients', JSON.stringify(updatedRows));

        // Reinicia el formulario
        setFormData({
          complete_name: '',
          phone_number: '',
          email: '',
          problem: '',
        });
      })
      .catch((error) => {
        console.error('Error al enviar el informe:', error);
      });
  };

  return (
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

      <div className='toDoList'>
        <section className="tables">
          <BasicTable rows={rows} /> {/* Aquí utilizamos el componente BasicTable */}
        </section>
        <section className="newTask">
          <div className="newTaskInput">
          <p>NEW TASK</p>
            <TextField
              id="complete_name"
              label="Full name"
              variant="filled"
              style={{ width: '450px' }}
              value={formData.complete_name}
              onChange={handleInputChange}
            />
            <TextField
              id="phone_number"
              label="Phone number"
              variant="filled"
              style={{ width: '450px' }}
              value={formData.phone_number}
              onChange={handleInputChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="filled"
              style={{ width: '450px' }}
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              id="problem"
              label="Problem"
              variant="filled"
              style={{ width: '450px' }}
              value={formData.problem}
              onChange={handleInputChange}
            />
            <Fab aria-label="add" style={{ marginTop: '5px' }} onClick={handleAdd}>
              <AddIcon />
            </Fab>
          </div>
        </section>
      </div>
    </body>
  );
}

