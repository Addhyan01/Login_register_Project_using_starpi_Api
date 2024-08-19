import React from 'react'

export default function Register() {
  return (
    
    <>


    <form className="w-25 offset-4" > 
        <h1>Register Form </h1>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">USername</label>
            <input type="email" className="form-control" id="username"  name="username" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' />
        </div>

        <button type="button" className="btn btn-primary">Submit</button>
    </form>


</>


  )
}
