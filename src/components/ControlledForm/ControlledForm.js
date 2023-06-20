import React, { useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCount from '../../hooks/useCount';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case 'SET_CHECKED':
      return {
        ...state,
        isMarried: action.payload.checked
      };
    default:
      return state;
  }
};

const ControlledForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        isMarried: false
    });
  
    const [count, increment] = useCount(0);

    const handleInputChange = (event) => {
        increment();
        const { name, value } = event.target;
        dispatch({ type: 'SET_VALUE', payload: { name, value } });
    };

    const handleCheckboxChange = (event) => {
        increment();
        dispatch({ type: 'SET_CHECKED', payload: { checked: event.target.checked } });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, dateOfBirth, gender } = formState;
  
        if (firstName === '' || lastName === '' || dateOfBirth === '' || gender === '') {
            alert('Все поля обязательны для заполнения!');
        } else {
            console.log(formState);
        }
    };

    return (
        <>
            <Form className='container my-3 shadow p-5' onSubmit={handleSubmit}>
                <h1 className='text-center mb-4'>Controlled Form Page</h1>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formDateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formState.dateOfBirth}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className='d-flex justify-content-center m-2' controlId="gender">
                    <div>
                        <Form.Check
                            type="radio"
                            name="gender"
                            value="male"
                            label="Male"
                            checked={formState.gender === 'male'}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Form.Check
                            type="radio"
                            name="gender"
                            value="female"
                            label="Female"
                            checked={formState.gender === 'female'}
                            onChange={handleInputChange}
                        />
                    </div>
                </Form.Group>
                <Form.Group controlId="isMarried">
                    <Form.Check
                        className='d-flex justify-content-center m-2'
                        type="checkbox"
                        name="isMarried"
                        label="Married"
                        checked={formState.isMarried}
                        onChange={handleCheckboxChange}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className='text-center'
                >
                    Submit
                </Button>
            </Form>
            <p className='text-center'>Total Changes: {count}</p>
        </>
    );
};

export default ControlledForm;
