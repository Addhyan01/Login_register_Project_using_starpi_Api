import React from 'react'

export default function Login() {
    return (
        <>


            <form className="w-25 offset-4" > 
                <h1>Login Form </h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="button" className="btn btn-primary">Submit</button>
            </form>


        </>
    )
}
