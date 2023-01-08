import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './RegisterSection.scss'


export default function RegisterSection(props) {

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required().min(2, 'Too short').max(35, 'Too long'),
    lastName: Yup.string().required().min(2, 'Too short').max(35, 'Too long'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required().min(6, 'Too short').max(255, 'Too long'),
    birthDay: Yup.string().required(),
    birthMonth: Yup.string().required(),
    birthYear: Yup.number().required().min(4, 'Too short').max(4, 'Too long')
  });


  return (
    <section className={`register ${props.toggleRegister ? '' : 'd-none'}   `}  >
      <div className="content">
        <div className='top'>
          <h2 className="heading"> Sign up  </h2>
          <span onClick={() => props.setToggleRegister(!props.toggleRegister)}> &times; </span>
        </div>
        <p className="subheading"> It's quick and easy </p>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthDay: '',
            birthMonth: '',
            birthYear: '',
            gender: ''
          }}
          validationSchema={RegisterSchema}
          onSubmit={values => {
          }}
        >
          {({ errors, touched }) => (
            <Form>

              <div className="first-last">
                <Field name="firstName" placeholder='First Name' />
                {errors.firstName && touched.firstName && <span className='error error-firstname'> {errors.firstName}  </span>}

                <Field name="lastName" placeholder='Last Name' />
                {errors.lastName && touched.lastName && <span className='error error-lastname'> {errors.lastName}  </span>}
              </div>

              <div className="email input-group">
                <Field name="email" placeholder='Email or Phone number' />
                {errors.email && touched.email && <span className='error error-firstname'> {errors.email}  </span>}
              </div>

              <div className="password-group ">
                <Field type='password' name="password" placeholder='Password' />
                {errors.password && touched.password && <span className='error'> {errors.password}  </span>}
              </div>

              <div className="birthday-group">
                <Field
                  component="select"
                  name="birthMonth"
                >
                  <option value="NY">January </option>
                  <option value="SF">February</option>
                  <option value="CH">March</option>
                  <option value="OTHER">April </option>
                  <option value="OTHER">May</option>
                  <option value="OTHER">June</option>
                  <option value="OTHER">July</option>
                  <option value="OTHER">August</option>
                  <option value="OTHER">September</option>
                  <option value="OTHER">October</option>
                  <option value="OTHER">November</option>
                  <option value="OTHER">December</option>
                </Field>

                <Field component="select" name="birthMonth">
                  {[...Array(31)].map((item, index) => <option key={index + 1} value={index + 1} > {index + 1}  </option>)}
                </Field>
                <Field component="select" name="birthYear">
                  {[...Array(105)].map((item, index) => <option key={2023 - index} value={2023 - index} > {2023 - index}  </option>)}
                </Field>
              </div>

              <div className="gender-group">
                <label htmlFor="">
                  <Field type='checkbox' name='gender' value="male" />
                  <span>  Male </span>
                </label>

                <label htmlFor="">
                  <Field type='checkbox' name='gender' value='female' />
                  <span> Female </span>
                </label>

                <label htmlFor="">
                  <Field type='checkbox' name='gender' value='custom' />
                  <span> Custom   </span>
                </label>

              </div>


              <div className="button-group">
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}
