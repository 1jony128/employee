import { FC } from "react";
import { Col, ListGroup, Nav } from "react-bootstrap";
import { IEmpoyee } from "../models/IEmpoyee";
import Departament from "./Departament";
import Employee from "./Employee";


interface IEmployeers {
    employeers: IEmpoyee[]
}

const Employeers: FC<IEmployeers> = ({employeers}) => {

    console.log(employeers)
    return (  
        <Col className='employeers'>
            <ListGroup as="ol" numbered>
                {
                    employeers && employeers.map(item => {
                    return <Employee employee={item}/>
                    })
                }   
            </ListGroup>
            
        </Col>
    );
}

export default Employeers;