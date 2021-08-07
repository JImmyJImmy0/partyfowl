import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = (props) => {
  const history = useHistory()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    location: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    authService.signup(formData)
    .then(() => {
      props.handleSignupOrLogin()
      history.push('/')
    })
    .catch(err => {
      props.updateMessage(err.message)
    })
  }

  useEffect(() => {
    const { name, email, password, passwordConf } = formData
    const isFormInvalid = !(name && email && password === passwordConf)
		setValidForm(isFormInvalid)
	}, [formData])

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Name: 
        </label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
          placeholder="Goose"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email-input" className={styles.label}>Email: </label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="honk@gaggle.com"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="age-input" className={styles.label}>
          Age: 
        </label>
        <input
          type="number"
          autoComplete="off"
          id="age"
          value={formData.age}
          name="age"
          onChange={handleChange}
          placeholder="1"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="location-input" className={styles.label}>
          Location: 
        </label>
        <input
          type="text"
          autoComplete="off"
          id="postal_code"
          value={formData.location}
          name="postal_code"
          onChange={handleChange}
          placeholder="535006"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password-input" className={styles.label}>
          Password: 
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="secret honk!"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm-input" className={styles.label}>
          Confirm Password: 
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm-input"
          value={formData.passwordConf}
          name="passwordConf"
          onChange={handleChange}
          placeholder="secret honk!"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlfor="avatar" className={styles.label}>Profile Image</label>
        <input type="file" id="avatar" name="avatar"
              accept=".jpg, .jpeg, .png"/>
      </div>
      <div className={styles.inputContainer}>
        <button disabled={validForm} className={styles.button}>Sign Up</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}
 
export default SignupForm
