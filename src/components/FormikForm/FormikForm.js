import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(32).required('Требуется указать имя'),
    lastName: Yup.string().min(2).max(32).required('Требуется указать фамилию'),
    dateOfBirth: Yup.date().required('Требуется указать дату рождения'),
    gender: Yup.string().oneOf(['мужской', 'женский']).required('Требуется указать пол'),
    isMarried: Yup.boolean()
});

const FormikForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', dateOfBirth: '', gender: '', isMarried: false }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className='container my-3 shadow p-5'>
                    <h1 className='text-center mb-4'>Formik Form Page</h1>
                    <div className="form-group">
                        <label className='m-1' htmlFor="formikFirstName">First Name</label>
                        <Field type="text" id="formikFirstName" name="firstName" className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`} />
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label className='m-1' htmlFor="formikLastName">Last Name</label>
                        <Field type="text" id="formikLastName" name="lastName" className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`} />
                        <ErrorMessage name="lastName" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                        <label className='m-1' htmlFor="formikDateOfBirth">Date of Birth</label>
                        <Field type="date" id="formikDateOfBirth" name="dateOfBirth" className={`form-control ${touched.dateOfBirth && errors.dateOfBirth ? 'is-invalid' : ''}`} />
                        <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
                    </div>
                    <div className="d-flex justify-content-center m-2 form-group">
                        <div className="form-check">
                            <Field type="radio" name="gender" value="male" className="form-check-input" />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <Field type="radio" name="gender" value="female" className="form-check-input" />
                            <label className="form-check-label">Female</label>
                        </div>
                        <ErrorMessage name="gender" component="div" className="text-danger" />
                    </div>
                    <div className="d-flex justify-content-center m-2 form-check">
                        <Field type="checkbox" name="isMarried" className="form-check-input" />
                        <label className="form-check-label">Married</label>
                    </div>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;