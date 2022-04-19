import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from './hooks/redux';
import { Container, Row, ThemeProvider } from 'react-bootstrap';
import Departaments from './components/Departaments';
import Employeers from './components/Employeers';
import SingleEmployee from './components/SingleEmloyee';


function App() {

  const {departaments, employee, showEmployee, selectDepartament} = useAppSelector(state => state.EmployeeReducer)

  return(
    
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Container>
        <Row>
          <Departaments departaments={departaments}/>
          {
            showEmployee 
            ?
            <SingleEmployee selectEmployee={showEmployee}/>
            : 
            <Employeers employeers={employee} filter={selectDepartament}/>
          }

        </Row>
      </Container>
      
    </ThemeProvider>
        
  )
  
}

export default App;
