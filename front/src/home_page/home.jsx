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
  const [searchEmail, setSearchEmail] = useState(''); // Nuevo estado para el filtro de email

  // useEffect para obtener los clientes cuando el componente se monta
  useEffect(() => {
    const savedRows = JSON.parse(localStorage.getItem('clients')) || [];

    if (savedRows.length > 0) {
      setRows(savedRows);
    }

    axios
      .get('http://127.0.0.1:8000/')
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los clientes:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleAdd = () => {
    axios
      .post('http://127.0.0.1:8000/', formData)
      .then((response) => {
        const updatedRows = [...rows, formData];
        setRows(updatedRows);
        localStorage.setItem('clients', JSON.stringify(updatedRows));

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

  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
    localStorage.setItem('clients', JSON.stringify(updatedRows));
  };

  const filteredRows = rows.filter((row) =>
    row.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <body>
      <section className="topBar">
        <div className='logos'>
          <div className='logos_principal'>
            <img src="/assets/valkyria.png" alt="Logo Valkyria" style={{ maxWidth: '100px' }} />
            <img src="/assets/by.png" alt="Logo Ivolution" style={{ maxWidth: '100px' }} />
          </div>
          <LogoutIcon onClick={Exit} className='logOutIcon' />
        </div>
      </section>

      <div className='toDoList'>
        <section className='dataTable'>
          <TextField
            id="search-email"
            label="Search by Email"
            variant="outlined"
            style={{ width: '450px', marginBottom: '20px' }}
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />

          <section className="table">
            <BasicTable rows={filteredRows} onDelete={handleDelete} /> {/* Agregado onDelete */}
          </section>
        </section>
        
        
        <section className="newTask">
          <div className="newTaskInput">
            <p>NEW TASK</p>
            <TextField
              id="complete_name"
              label="Full name"
              variant="outlined"
              style={{ width: '450px', paddingBottom:'15px' }}
              value={formData.complete_name}
              onChange={handleInputChange}
            />
            <TextField
              id="phone_number"
              label="Phone number"
              variant="outlined"
              style={{ width: '450px', paddingBottom:'15px' }}
              value={formData.phone_number}
              onChange={handleInputChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              style={{ width: '450px', paddingBottom:'15px' }}
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              id="problem"
              label="Problem"
              variant="outlined"
              style={{ width: '450px' }}
              value={formData.problem}
              onChange={handleInputChange}
            />
            <Fab aria-label="add" style={{ marginTop: '40px'}} onClick={handleAdd}>
              <AddIcon />
            </Fab>
          </div>
        </section>
      </div>
    </body>
  );
}
