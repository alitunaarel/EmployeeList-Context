import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext, useState } from 'react'

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext)

    /*    const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [address, setAddress] = useState("");
       const [phone, setPhone] = useState(""); */

    const [newEmployee, setNewEmployee] = useState({
        name: "", email: "", address: "", phone: ""
    })

    const { name, email, address, phone } = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter text"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    row={3}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" block>
                Add New Employee</Button>{' '}
        </Form>
    )
}

export default AddForm;
