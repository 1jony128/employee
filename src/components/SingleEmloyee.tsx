import { FC } from "react";
import { Button, Card, CloseButton, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IEmpoyee } from "../models/IEmpoyee";
import { showEmployee } from "../store/reducers/EmployeeSlice";


interface ISingleEmployee {
    selectEmployee: IEmpoyee;
}

const SingleEmployee: FC<ISingleEmployee> = ({selectEmployee}) => {

    const dispatch = useDispatch()

    const singleEmployee = () => {
        dispatch(showEmployee(null))
    }


    return (
        <Col className='employee'>
           <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{selectEmployee.firstName}</Card.Title>
                    <Card.Text>
                    {selectEmployee.lastName}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>more info</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button 
                        variant="secondary mt-3"
                        onClick={singleEmployee}
                        >
                            Back to list
                    </Button>
                </Card.Body>
            </Card>
            
        </Col>
    )
}

export default SingleEmployee;