import { FC } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectDepartment } from "../store/reducers/EmployeeSlice";


const DepartamenAll: FC = () => {

    const dispatch = useDispatch()

    const onSelect = () => {
        dispatch(selectDepartment(0))
    }

    return (  
        <>
        <Nav.Item>
        <Nav.Link 
        eventKey={0}
        onClick={onSelect}
        >
            <Row>
                <Col>
                    All departaments
                </Col>
            </Row>
        </Nav.Link>
        </Nav.Item>
            
        </>
    );
}

export default DepartamenAll;