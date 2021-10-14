import React from 'react'

function User({details}){
    if (!details) {
        return <h3>Working fetching your User details...</h3>
      }

    return (
        <div className='user container'>
            <h2>{details.username}</h2>
            <p>{details.email}</p>
            <p>{details.password}</p>
            {/* <p>Terms of Service: {details.terms}</p> */}
        </div>

    )
}

export default User