import { FC } from "react";
import { Col, Nav } from "react-bootstrap";
import { IEmpoyee } from "../models/IEmpoyee";
import Departament from "./Departament";


interface IEmployeers {
    employeers: IEmpoyee[]
}

const Employeers: FC<IEmployeers> = ({employeers}) => {

    console.log(employeers)
    return (  
        <Col className='employeers'>
            <Nav variant="pills" className="flex-column">
                {
                    employeers && employeers.map(item => {
                    return <div key={item.id}>{item.firstName}</div>
                    })
                }   
            </Nav>
            
        </Col>
    );
}

export default Employeers;