import { FC } from "react";
import { Button, CloseButton, Col, ListGroup, Nav } from "react-bootstrap";
import { IEmpoyee } from "../models/IEmpoyee";
import Departament from "./Departament";


interface IEmployee {
    employee: IEmpoyee
}

const Employee: FC<IEmployee> = ({employee}) => {



    return <ListGroup.Item
                action 
                key={employee.id}
                as="li"
                variant="light"
                className="d-flex justify-content-between align-items-start"
            >    
                <div className="ms-4 me-auto">
                    <div className="fw-bold">{employee.firstName}</div>
                    {employee.lastName}
                </div>
                <div className="ms-6 me-3 mt-2">
                <Button variant="secondary" className="edit">Редактировать</Button>
                </div>
                <CloseButton className="mt-2 close"/>
            </ListGroup.Item>
}

export default Employee;