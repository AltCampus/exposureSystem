import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

function RegisterVerification() {
  return (
    <div
      className='container card flex-center notification'
      style={{ width: '60rem' }}
    >
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <h1 className='heading'>Thank You for registering with us!</h1>
        <h5>Please wait for your verification email to proceed</h5>
        <NavLink to='/'>
          <Button className='button' type='primary' size='large'>
            Home
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default RegisterVerification;
