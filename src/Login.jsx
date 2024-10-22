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

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    // Regular expression for basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return false; // Prevent form submission
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false; // Prevent form submission
    }

    setError(''); // Clear error if validation passes
    return true; // Allow form submission
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Handle successful validation (e.g., submit the form)
      alert('Login successfull!');
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage 
              src='https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=' 
              alt="login form" 
              className='rounded-start w-100' 
            />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0 ">Login Page</span>
              </div>

              <h5 className="fw-normal my-4 pb-3 ms-3" style={{ letterSpacing: '1px' }}>
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

                {error && <div className="text-danger mb-4">{error}</div>} {/* Error message */}

                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
