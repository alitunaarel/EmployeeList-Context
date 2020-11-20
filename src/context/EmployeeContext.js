import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'ali', email: 'ali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'cali', email: 'bali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'bali', email: 'kali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'dali', email: 'lali@email.com', address: 'blabla', phone: '123456789' },
    ])

    return (
        <EmployeeContext.Provider value={{ employees }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;