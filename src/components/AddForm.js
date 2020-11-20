import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext, useState } from 'react'

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    row={3}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" block>
                Add New Employee</Button>{' '}
        </Form>
    )
}

export default AddForm;
