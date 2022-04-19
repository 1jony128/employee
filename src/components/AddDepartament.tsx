import { useState } from "react"
import { Button, FormControl, InputGroup, ModalTitle } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { IDepartment } from "../models/IDepartament"
import { addDepartments } from "../store/reducers/EmployeeSlice"



const AddDepartament = () => {

    const dispatch = useDispatch()
    
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<IDepartment>({
        departmentId: Number(new Date()),
        description: "",
        name: ""
    })

    const openForm = () => {
        setOpen(true)
    }

    const addDepartament = () => {
        if(value.name !== ""){
            dispatch(addDepartments(value))
            cancelEdit()
        }
    }

    const cancelEdit = () => {
        setValue({...value, name: "", description: ""})
        setOpen(false)
    }

    if(open){
        return (
            <div className="border list-group list-group-numbered add-form">
                <ModalTitle>Form add departament</ModalTitle>
                <InputGroup size="sm" className="mb-1 mt-3">
                    <InputGroup.Text id="Name departament">Name departament </InputGroup.Text>
                    <FormControl
                        placeholder="Name departament"
                        aria-label="Name departament"
                        aria-describedby="Name departament"
                        value={value.name}
                        onChange={(e) => setValue({...value, name: e.target.value, departmentId: Number(new Date())})}
                    />
                </InputGroup>
                <InputGroup size="sm" className="mb-1">
                    <InputGroup.Text id="Description">Description</InputGroup.Text>
                    <FormControl
                        placeholder="Description"
                        aria-label="Description"
                        aria-describedby="Description"
                        value={value.description}
                        onChange={(e) => setValue({...value, description: e.target.value})}
                    />
                </InputGroup>
                <div className="mt-2 d-flex ">
                    <Button 
                        variant="info"
                        onClick={addDepartament}
                    >
                        Add Departament
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
                Add Departament
            </Button>
        </div>
    )
}

export default AddDepartament;