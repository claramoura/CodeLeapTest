import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.js';
import SignUp from './pages/SignUp.js';
import Main from './pages/Main.js';
import './App.css';

function App() {

  const user = localStorage.getItem("user") ? localStorage.getItem("user") : null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout user={user} />} >
          {user ?
            <Route index element={<Main user={user} />} />
          :
            <Route index element={<SignUp />} />
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
