import { FC } from "react";
import { Nav } from "react-bootstrap";
import { IDepartment } from "../models/IDepartament";


const Departament: FC<IDepartment> = ({name, departmentId, description }) => {


    return (  
        <>
        <Nav.Item>
            <Nav.Link eventKey={departmentId}>{name}</Nav.Link>
        </Nav.Item>
            
        </>
    );
}

export default Departament;