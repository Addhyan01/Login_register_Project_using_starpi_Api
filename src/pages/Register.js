import React from 'react'

export default function Register() {

    const sendData = () =>{


        let data= {
            username: "Sonali",
            email: "sonali@gmail.com",
            password: "Sonali@123"
        }

        fetch(`http://localhost:1337/api/auth/local/register`, {
            method:"post",
            headers:{
                 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then((res)=>{res.json()})
        .then((data)=>{ console.log(data)})
        .catch(()=>{})

    }



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

        <button type="button" onClick={sendData} className="btn btn-primary">Submit</button>
    </form>


</>


  )
}
