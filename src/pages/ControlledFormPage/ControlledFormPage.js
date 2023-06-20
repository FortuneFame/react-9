import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledForm from '../../components/ControlledForm';

const ControlledFormPage = () => {
  return (
    <div className='mt-5 d-flex justify-content-center'>
      <div className='text-center'>
        <ControlledForm />
      </div>
    </div>
  );
};

export default ControlledFormPage;