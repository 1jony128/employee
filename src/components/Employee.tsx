import { FC, useState } from "react";
import { Button, CloseButton, Col, FormControl, InputGroup, ListGroup, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/redux";
import { IEmpoyee } from "../models/IEmpoyee";
import { cancelEditEmployee, editEmployee, removeEmployee, showEmployee, updateEmployee } from "../store/reducers/EmployeeSlice";

interface IEmployee {
    employee: IEmpoyee
}

const Employee: FC<IEmployee> = ({employee}) => {

    const {editingEmployee} = useAppSelector(state => state.EmployeeReducer);

    const [value, setValue] = useState<IEmpoyee>({
        firstName: employee.firstName,
        lastName: employee.lastName,
        id: employee.id,
        departmentId: employee.departmentId
    })

    const dispatch = useDispatch()

    const remove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(removeEmployee(employee.id))
    }

    const edit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(editEmployee(employee.id))
    }

    const save = () => {
        dispatch(updateEmployee(value))
    }

    const cancelEdit = () => {
        dispatch(cancelEditEmployee())
    }

    const singleEmployee = () => {
        dispatch(showEmployee(employee))
    }

    if(editingEmployee && editingEmployee === employee.id){
        return <ListGroup.Item
                action 
                key={employee.id}
                as="li"
                variant="light"
                className="d-flex flex-direction-column justify-content-between editing"
            >    
                <div>
                    <InputGroup size="sm" className="mb-1">
                        <InputGroup.Text id="firstName">firstName</InputGroup.Text>
                        <FormControl
                            placeholder="firstName"
                            aria-label="firstName"
                            aria-describedby="firstName"
                            value={value.firstName}
                            onChange={(e) => setValue({...value, firstName: e.target.value})}
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-1">
                        <InputGroup.Text id="lastName">lastName</InputGroup.Text>
                        <FormControl
                            placeholder="lastName"
                            aria-label="lastName"
                            aria-describedby="lastName"
                            value={value.lastName}
                            onChange={(e) => setValue({...value, lastName: e.target.value})}
                        />
                    </InputGroup>
                </div>
                <div>
                    <div className="ms-6 me-3">
                        <Button 
                            variant="secondary" 
                            className="edit"
                            onClick={cancelEdit}
                        >
                            Отменить редактирование
                        </Button>
                    </div>
                    <div className="ms-6 me-3 mt-1">
                        <Button 
                            variant="primary" 
                            className="edit"
                            onClick={save}
                        >
                            Сохранить
                        </Button>
                    </div>
                </div>
                
                <CloseButton onClick={(e) => remove(e)} className="mt-2 close"/>
            </ListGroup.Item>
    }

    return <ListGroup.Item
                action 
                onClick={singleEmployee}
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
                    <Button 
                        variant="secondary" 
                        className="edit"
                        onClick={(e) => edit(e)}
                    >
                        Редактировать
                    </Button>
                </div>
                <CloseButton onClick={(e) =>remove(e)} className="mt-2 close"/>
            </ListGroup.Item>
}

export default Employee;