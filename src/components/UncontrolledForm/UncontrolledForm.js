import React, { useState, useReducer, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useTime from '../../hooks/useTime';

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

const UncontrolledForm = () => {
    useTime();

    const [formState, dispatch] = useReducer(formReducer, {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        isMarried: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;
        const dateOfBirth = event.target.elements.dateOfBirth.value;
        const gender = event.target.elements.gender.value;
        const isMarried = event.target.elements.isMarried.checked;

        if (firstName === '' || lastName === '' || dateOfBirth === '' || gender === '') {
            alert('Все поля обязательны для заполнения!');
        } else {
            dispatch({
                type: 'SET_VALUE',
                payload: { name: 'firstName', value: firstName }
            });
            dispatch({
                type: 'SET_VALUE',
                payload: { name: 'lastName', value: lastName }
            });
            dispatch({
                type: 'SET_VALUE',
                payload: { name: 'dateOfBirth', value: dateOfBirth }
            });
            dispatch({
                type: 'SET_VALUE',
                payload: { name: 'gender', value: gender }
            });
            dispatch({
                type: 'SET_CHECKED',
                payload: { checked: isMarried }
            });
            setIsSubmitted(true);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            console.log(formState);
        }
    }, [isSubmitted, formState]);

    return (
        <Form className='container my-3 shadow p-5' onSubmit={handleSubmit}>
            <Form.Group controlId="uncontrolledFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                />
            </Form.Group>
            <Form.Group controlId="uncontrolledLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                />
            </Form.Group>
            <Form.Group controlId="uncontrolledDateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    name="dateOfBirth"
                />
            </Form.Group>
            <Form.Group className='d-flex justify-content-center m-2'>
                <div>
                    <Form.Check
                        type="radio"
                        name="gender"
                        value="male"
                        label="Male"
                    />
                </div>
                <div>
                    <Form.Check
                        type="radio"
                        name="gender"
                        value="female"
                        label="Female"
                    />
                </div>
            </Form.Group>
            <Form.Group controlId="isMarried">
                <Form.Check
                    className='d-flex justify-content-center m-2'
                    type="checkbox"
                    name="isMarried"
                    label="Married"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UncontrolledForm;