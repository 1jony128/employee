import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDepartment } from "../../models/IDepartament";
import { IEmpoyee } from "../../models/IEmpoyee";

interface IEmployeeSlice {
    employee: IEmpoyee[];
    departaments: IDepartment[];
    isLoading: boolean;
    error: string;
}

const initialState : IEmployeeSlice = {
    employee: [{
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "1"
    },
    {
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "2"
    },
    {
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "3"
    },
    {
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "4"
    },
    {
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "5"
    },
    {
        firstName: "firstName",
        lastName: "lastName",
        departmentId: 1,
        id: "6"
    },],
    departaments: [
        {name: 'Marketing', description: 'Marketing description', departmentId: 1},
        {name: 'Support', description: 'Support description', departmentId: 2},
        {name: 'Accounting', description: 'Accounting description', departmentId: 3},
        {name: 'General', description: 'General description', departmentId: 4},
        {name: 'Administrative', description: 'Administrative description', departmentId: 5},
    ],
    isLoading: false,
    error: ''
}


export const EmployeeSlice = createSlice({
    name: "launch",
    initialState,
    reducers: {
        addEmployee(state){
            state.isLoading = true;
        },
        addEmployeeSuccess(state, action: PayloadAction<IEmpoyee>) {
            state.isLoading = false;
            state.error = '';
            state.employee.push(action.payload);
        },
        addDepartments(state){
            state.isLoading = true;
        },
        addDepartmentsSuccess(state, action: PayloadAction<IDepartment>) {
            state.isLoading = false;
            state.error = '';
            state.departaments.push(action.payload);
        },
        removeEmployee(state, action: PayloadAction<number>){
            state.isLoading = true;
        },
        removeEmployeeSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.employee.filter(item => item.id !== action.payload);
        },
        removeDepartments(state, action: PayloadAction<number>){
            state.isLoading = true;
        },
        removeDepartmentsSuccess(state, action: PayloadAction<number>) {
            state.isLoading = false;
            state.error = '';
            state.departaments.filter(item => item.departmentId !== action.payload);
        },
        updateEmployee(state, action: PayloadAction<number>){
            state.isLoading = true;
        },
        updateEmployeeSuccess(state, action: PayloadAction<IEmpoyee>) {
            state.isLoading = false;
            state.error = '';
            state.employee.map(item => {
                if(item.id === action.payload.id){
                    return action.payload
                } else {
                    return item
                }
            })
        },
        updateDepartments(state, action: PayloadAction<number>){
            state.isLoading = true;
        },
        updateDepartmentsSuccess(state, action: PayloadAction<IDepartment>) {
            state.isLoading = false;
            state.error = '';
            state.departaments.map(item => {
                if(item.departmentId === action.payload.departmentId){
                    return action.payload
                } else {
                    return item
                }
            })
        },
        

    }
})

export default EmployeeSlice.reducer;