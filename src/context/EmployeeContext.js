import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
    /* 
        const [employees, setEmployees] = useState() */
    const reducer = (employees, action) => {
        switch (action.type) {
            case 'add_employee':
                return [...employees, {
                    id: uuidv4(),
                    name: action.employee.name,
                    email: action.employee.email,
                    address: action.employee.address,
                    phone: action.employee.phone,
                }]
            case 'remove_employee':
                return employees.filter(employee => employee.id !== action.id)

            case 'update_employee':
                return employees.map(employee => (employee.id === action.id ? action.updatedEmployee : employee))

            default:
                return employees;
        }
    }
    const [employees, dispatch] = useReducer(reducer, [
        { id: uuidv4(), name: 'ali', email: 'ali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'cali', email: 'bali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'bali', email: 'kali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'dali', email: 'lali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'Eali', email: 'lali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'Fali', email: 'lali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'Gali', email: 'lali@email.com', address: 'blabla', phone: '123456789' },
        { id: uuidv4(), name: 'Hali', email: 'lali@email.com', address: 'blabla', phone: '123456789' },
    ],
        () => {
            const employees = localStorage.getItem('employees')
            return employees ? JSON.parse(employees) : []
        }
    )



    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    })

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name))


    /*     const addEmployee = (name, email, address, phone) => {
            setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
        } */

    /*   const deleteEmployee = (id) => {
          setEmployees(employees.filter(employee => employee.id !== id))
      } */

    /*    const updateEmployee = (id, updatedEmployee) => {
           setEmployees(employees.map(employee => (employee.id === id ? updatedEmployee : employee)))
       } */

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, dispatch, }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;