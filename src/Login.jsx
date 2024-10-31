import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Login successful!');
      // Implement your login logic here
    }
  };

  const handleGoogleSignUp = () => {
    loginWithRedirect({ connection: 'google-oauth2' });
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard className="shadow">
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage 
              src='https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=' 
              alt="login form" 
              className='rounded-start w-100' 
            />
          </MDBCol>

          <MDBCol md='6' className="d-flex flex-column justify-content-center">
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2 mb-4'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Login Page</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Sign into your account
              </h5>

              <form onSubmit={handleSubmit}>
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Email address' 
                  id='formControlLg1' 
                  type='email' 
                  size="lg" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Password' 
                  id='formControlLg' 
                  type='password' 
                  size="lg" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />

                {error && <div className="text-danger mb-4">{error}</div>}

                <MDBBtn type="submit" className="mb-4 px-5" color='dark' size='lg'>
                  Login
                </MDBBtn>

                <MDBBtn 
                  onClick={handleGoogleSignUp} 
                  className="mb-4 px-5" 
                  style={{ backgroundColor: '#DB4437', color: 'white' }} 
                  size='lg'
                >
                  <MDBIcon fab icon="google" className="me-2" />
                  Sign Up with Google
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
