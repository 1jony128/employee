import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from './hooks/redux';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import Departaments from './components/Departaments';
import { BrowserRouter, Route } from 'react-router-dom';
import Employeers from './components/Employeers';


function App() {

  const {departaments, employee} = useAppSelector(state => state.EmployeeReducer)

  return(
    
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Container>
        <Row>
        <BrowserRouter>
          <Route path='/'>
            <Departaments departaments={departaments}/>
          </ Route>
          <Route path="/employee">
          <Employeers employeers={employee}/>
          </Route>
          
        </BrowserRouter>
        </Row>
      </Container>
      
    </ThemeProvider>
        
  )
  
}

export default App;
