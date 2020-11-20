import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    row={3}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                />
            </Form.Group>

            <Button variant="primary">Add New Employee</Button>{' '}
        </Form>
    )
}

export default AddForm;
