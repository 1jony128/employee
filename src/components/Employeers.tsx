import { FC, useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { IEmpoyee } from "../models/IEmpoyee";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";


interface IEmployeers {
    employeers: IEmpoyee[]
    filter: number
}

const Employeers: FC<IEmployeers> = ({employeers, filter}) => {

    const [arrFilter, setArrFilter] = useState<IEmpoyee[]>()

    useEffect(()=>{
        const filterArray = JSON.parse(JSON.stringify(employeers))
        setArrFilter(filterArray.filter((item:IEmpoyee) => filter === item.departmentId))
    }, [filter])

    if(filter === 0){
        return (  
            <Col className='employeers'>
                <ListGroup as="ol" numbered>
                    {
                        employeers && employeers.map(item => {
                        return <Employee key={item.id} employee={item}/>
                        })
                    }   
                </ListGroup>
                <AddEmployee />
            </Col>
        );
    }
    
    return (  
        <Col className='employeers'>
            <ListGroup as="ol" numbered>
                {
                    arrFilter && arrFilter.map(item => {
                        return <Employee key={item.id} employee={item}/>
                    })
                }   
            </ListGroup>
            <AddEmployee />
        </Col>
    );
}

export default Employeers;