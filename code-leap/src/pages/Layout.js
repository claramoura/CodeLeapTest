import { Outlet } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import Header from '../components/Header.js';

function Layout(props) {
  return (
    <>
    {props.user &&
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