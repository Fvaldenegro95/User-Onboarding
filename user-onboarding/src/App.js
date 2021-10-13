import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import User from './Components/User'

import './App.css';
import * as yup from 'yup'
import schema from './validation/formSchema'
import axios from 'axios'

const initialFormValues = {
  // text inputs
  username: '',
  email: '',
  password: '',
  // checkbox
  terms: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: false,
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res =>{
        setUsers([res.data, ...users]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res =>{
    setUsers([res.data, ...users])
  }).catch(err => {
    console.error(err);
  }).finally(() =>{
    setFormValues(initialFormValues);
  })
}

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    // ssssssss //

  }
  postNewUser(newUser)
  }
  useEffect(() => {
    getUsers()
  }, [])
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  
  
  
  
  
  return (
    <div className="container">
      <header><h1>Users App</h1></header>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
    />
    {
      users.map(item => {
      return (
        <User key={item.id} details ={item} />
      )
    })
    }
      
    </div>
  );
}

