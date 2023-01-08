import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './IndexPage.scss'
import RegisterSection from '../components/RegisterSection';

export default function IndexPage() {

  const  [ toggleRegister, setToggleRegister ] = useState(false)


  return (
    <div className='index-page'>

    <RegisterSection toggleRegister={toggleRegister}  setToggleRegister={setToggleRegister} />
  

      <section className="start">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h1 className="heading brand"> facebook </h1>
              <p className="subheading">Connect with friends and the world around you on Facebook.</p>
            </div>
            <div className="right-column">
              <div className="main">
                <LoginForm />
                <div className="forgot">
                  <a href="">Forgot Password ? </a>
                </div>
                <hr />
                <div className="create">
                  <button onClick={ () => setToggleRegister(!toggleRegister) } > Create new account  </button>
                </div>
                <p className="sub text">Create a Page for a celebrity, brand or business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

function LoginForm() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .required('Required'),
  });

  return (
    <div className='login'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
        }}
      >
        {({ errors, touched }) => (
          <Form>

            <div className="input-group">
              <Field name="email" placeholder='Email or Phone number' />
              {errors.email && touched.email && <span className='error'> {errors.email}  </span>}
            </div>

            <div className="input-group">
              <Field name="password" placeholder='Password' />
              {errors.password && touched.password && <span className='error'> {errors.password}  </span>}
            </div>
            <div className="button-group">
              <button type="submit">Submit</button>
            </div>
          </Form>

        )}
      </Formik>

    </div>

  );
}


