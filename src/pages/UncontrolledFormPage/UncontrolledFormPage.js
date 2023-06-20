import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledForm from '../../components/UncontrolledForm';

const UncontrolledFormPage = () => {
  return (
    <div className='mt-5 d-flex justify-content-center'>
      <div className='text-center'>
        <h1 className='text-center mb-5'>Uncontrolled Form Page</h1>
        <UncontrolledForm/>
      </div>
    </div>
  );
};

export default UncontrolledFormPage;