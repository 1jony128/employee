import { FC } from "react";
import { Col, Nav } from "react-bootstrap";
import { IDepartment } from "../models/IDepartament";
import Departament from "./Departament";


interface IDepartaments {
    departaments: IDepartment[]
}

const Departaments: FC<IDepartaments> = ({departaments}) => {


    return (  
        <Col xs lg="4" className='departaments'>
            <Nav variant="pills" className="flex-column">
                {
                    departaments && departaments.map(item => {
                    return <Departament 
                                key={item.departmentId}
                                departmentId={item.departmentId}
                                name={item.name}
                                description={item.description}
                            />
                    })
                }   
            </Nav>
            
        </Col>
    );
}

export default Departaments;