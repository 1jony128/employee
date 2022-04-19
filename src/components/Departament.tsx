import { FC, useState } from "react";
import { Button, CloseButton, Col, FormControl, InputGroup, Nav, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/redux";
import { IDepartment } from "../models/IDepartament";
import { cancelEditDepartments, editDepartments, removeDepartments, selectDepartment, updateDepartments } from "../store/reducers/EmployeeSlice";


const Departament: FC<IDepartment> = ({name, departmentId, description }) => {

    const {editingDepartament} = useAppSelector(state => state.EmployeeReducer);

    const [value, setValue] = useState<IDepartment>({name, departmentId, description})

    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeDepartments(departmentId))
    }

    const edit = () => {
        dispatch(editDepartments(departmentId))
    }

    const save = () => {
        console.log("ds")
        dispatch(updateDepartments(value))
    }

    const cancelEdit = () => {
        dispatch(cancelEditDepartments())
    }

    const onSelect = () => {
        dispatch(selectDepartment(departmentId))
    }

    if(editingDepartament && editingDepartament === departmentId){
        return (  
            <>
            <Nav.Item>
            <Nav.Link eventKey={departmentId} className={'editing'}>
                <Row>
                    <Col xl={"6"} >
                    <InputGroup size="sm" className="mb-1">
                        <FormControl
                            placeholder="firstName"
                            aria-label="firstName"
                            aria-describedby="firstName"
                            value={value.name}
                            onChange={(e) => setValue(({...value, name: e.target.value}))}
                        />
                    </InputGroup>
                    </Col>
                    <Col>
                        <Button 
                            variant="secondary" 
                            className="edit mb-1"
                            onClick={cancelEdit}
                        >
                            Отмена
                        </Button>
                        <Button 
                            variant="light" 
                            className="edit"
                            onClick={save}
                        >
                            Сохранить
                        </Button>
                    </Col>
                    <Col>
                        <CloseButton 
                            onClick={remove} 
                            className="close mr-auto"
                        />
                    </Col>
                </Row>
            </Nav.Link>
            </Nav.Item>
                
            </>
        );
    }

    return (  
        <>
        <Nav.Item>
        <Nav.Link 
        eventKey={departmentId}
        onClick={onSelect}
        >
            <Row>
                <Col>
                    {name}
                </Col>
                <Col>
                    <Button 
                        variant="secondary" 
                        className="edit"
                        onClick={edit}
                    >
                        Редактировать
                    </Button>
                </Col>
                <Col>
                    <CloseButton 
                        onClick={remove} 
                        className="close mr-auto"
                    />
                </Col>
            </Row>
        </Nav.Link>
        </Nav.Item>
            
        </>
    );
}

export default Departament;