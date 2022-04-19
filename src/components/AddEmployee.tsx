import { FC, useEffect, useState } from "react"
import { Button, Form, FormControl, InputGroup, ModalTitle } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../hooks/redux"
import { IDepartment } from "../models/IDepartament"
import { IEmpoyee } from "../models/IEmpoyee"
import { addDepartments, addEmployee } from "../store/reducers/EmployeeSlice"



const AddEmployee = () => {

    const dispatch = useDispatch();

    const {departaments, selectDepartament} = useAppSelector(state => state.EmployeeReducer)

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<IEmpoyee>({
        departmentId: selectDepartament,
        id: String(new Date()),
        firstName: "",
        lastName: "",
    })

    useEffect(()=> {
        setValue({...value, departmentId: selectDepartament})
    }, [selectDepartament])

    const openForm = () => {
        setOpen(true)
    }

    const addEmployeeFunc = () => {
        if(value.firstName !== ""){
            dispatch(addEmployee(value))
            cancelEdit()
        }
    }

    const cancelEdit = () => {
        setValue({...value, firstName: "", lastName: ""})
        setOpen(false)
    }

    if(open){
        return (
            <div className="border list-group list-group-numbered add-form">
                <ModalTitle>Form add Employee</ModalTitle>
                <InputGroup size="sm" className="mb-1 mt-3">
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
                <div className="select-wrapper">
                <Form.Select 
                    size="sm" 
                    value={value.departmentId}
                    onChange={(e) => setValue({...value, departmentId: Number(e.target.value)})}
                >
                    <option disabled>select department</option>
                    {departaments && departaments.map(item => {
                        return <option key={item.departmentId} value={item.departmentId}>{item.name}</option>
                    })}
                </Form.Select>
                </div>
                
                <div className="mt-2 d-flex ">
                    <Button 
                        variant="info"
                        onClick={addEmployeeFunc}
                    >
                        Add Employee
                    </Button>
                    <Button 
                        variant="secondary"
                        onClick={cancelEdit}
                        className={"ms-5"}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        )
    }


    return (
        <div className="mt-5">
            <Button 
                variant="info"
                onClick={openForm}
            >
                Add Employee
            </Button>
        </div>
    )
}

export default AddEmployee;