import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import FormikForm from '../../components/FormikForm';

const FormikFormPage = () => {
  return (
    <div className='mt-5 d-flex justify-content-center'>
      <div className='text-center'>
        <FormikForm />
      </div>
    </div>
  );
};

export default FormikFormPage;