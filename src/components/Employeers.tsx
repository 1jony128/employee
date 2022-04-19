import { FC } from "react";
import { Col, ListGroup, Nav } from "react-bootstrap";
import { IEmpoyee } from "../models/IEmpoyee";
import AddEmployee from "./AddEmployee";
import Departament from "./Departament";
import Employee from "./Employee";


interface IEmployeers {
    employeers: IEmpoyee[]
    filter: number
}

const Employeers: FC<IEmployeers> = ({employeers, filter}) => {

    // console.log(employeers)
    if(filter === 0){
        return (  
            <Col className='employeers'>
                <ListGroup as="ol" numbered>
                    {
                        employeers && employeers.map(item => {
                        return <Employee key={item.id} employee={item}/>
                        })
                    }   
                </ListGroup>
                <AddEmployee />
            </Col>
        );
    }
    
    return (  
        <Col className='employeers'>
            <ListGroup as="ol" numbered>
                {
                    employeers && employeers.map(item => {
                        if(filter === item.departmentId){
                            return <Employee key={item.id} employee={item}/>
                        }
                    })
                }   
            </ListGroup>
            <AddEmployee />
        </Col>
    );
}

export default Employeers;