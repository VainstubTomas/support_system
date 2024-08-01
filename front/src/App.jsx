import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home_page/home';
import Login from './login_page/login';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/home_page' element={<Home />}/>       
          </Routes>

      </BrowserRouter>
  )
}