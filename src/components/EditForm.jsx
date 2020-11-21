import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext, useState } from 'react'

const EditForm = ({ theEmployee }) => {


    const { updateEmployee } = useContext(EmployeeContext)

    const employee = theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name)
    const [email, setEmail] = useState(employee.email)
    const [address, setAddress] = useState(employee.address)
    const [phone, setPhone] = useState(employee.phone)




    return (
        <Form >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}

                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    name="address"
                    value={address}

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

                />
            </Form.Group>

            <Button variant="primary" type="submit" block>
                Edit Employee</Button>
        </Form>
    )
}

export default EditForm;

