import { Outlet } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.js';

function Layout() {
  return (
    <>
    {useLocation().pathname !== '/signUp' &&
      <Header />  
    } 
    <main className="py-3">
      <Container>
        <Outlet/>
      </Container>
    </main>
    </>
  );
}

export default Layout;