import {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Login () {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [isLoading, setIsLoading]=useState(false)

    const LoginAccount=(e)=>{
        e.preventDefault()
        setIsLoading(true)
        console.log("username: "+email,"password: "+ password)

        setEmail("")
        setPassword("")
        setIsLoading(false)
    }

  return (
    <div className='container'>
        <div className="p-4 col-md-6 mx-auto my-4">
            <h2 className='mt-2 mb-4 text-primary'>Login to your account</h2>
            {isLoading&&<div className='alert alert-info' role="alert">Please wait...</div>}
           
            <form>
                <div className='form-floating mb-4 text-primary'>
                    <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control"/>
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className='form-floating mb-4 text-primary'>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/> 
                    <label htmlFor="password">Password</label>
                </div>
                <div className='d-grid mb-4 '>
                     <button type='submit' onClick={LoginAccount} className=" btn btn-primary btn-lg">Login</button>
                </div>
                <p className='text-primary'>
                    <small>
                    <Link to="resetpassword">Reset password</Link>
                    </small>
                </p>
                <p>Don't have an account?{" "}
                   <Link to="register">Register</Link> 
                </p>
            </form>
            
        </div>
    </div>
  )
}
