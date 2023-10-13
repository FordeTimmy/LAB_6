
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './componets/content';
import Footer from './componets/footer';
import Header from './componets/header';
import Create from './componets/create';
import {} from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Read from './componets/read';
function App() {
  return (
    <BrowserRouter>
    <div className="App">

       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes> 
    <Route path='/' element={<Content></Content>}></Route> 
    <Route path='read' element={<Read></Read>}></Route>
    <Route path='create' element={<Create></Create>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
