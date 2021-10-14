import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    const onChange = event => {
        const {name, value, checked, type} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add A User</h2>

                <button id="submitBtn" disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.email}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>
                    {/* TEXT INPUTS */}
                <label>username
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'                    
                    />
                </label>
                
                <label>email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'                
                    />
                </label>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
            </div>
        
            <div className='form-group checkboxes'>
                <h3>Please Accept the Terms of Service</h3>
                <label>Terms of Service
                    <input
                    type='checkbox'
                    name='terms'
                    onChange={onChange}
                    checked={values.terms}
                />
                </label>
            </div>
        </form>
    )
}