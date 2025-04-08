import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
   <>
   <br></br>
   <br></br>
<div className="container my-5">
    <div className="row">
        <div className="col-md-6 col-sm-8 m-auto">
            <h5 className='bg-primary text-light text-center p-2'>Login to Your Account</h5>
            <form>
                <div className="mb-3">
                    <label>User Name*</label>
                    <input type="text" name="username"  className= "form-control border-3" placeholder='User Name' />
                <p className='text-danger'>Invalid Username or Password</p> 
                </div>

                <div className="mb-3">
                    <label>Password*</label>
                    <div className="bth-group d-flex">
                        <input type="password" name="password" id='password' className="form-control border-3 border-primary" placeholder='Password' />
                    </div>
                </div>

                <div className="mb-3">
                    <button type="submit" className='btn btn-primary w-100'>Login</button>
                </div>
            </form>
            <div className='d-flex justify-content-between'>
                <Link to="#">Forget Password</Link>
                <Link to="/signup">Don't Heave an Account?Signup</Link>
            </div>
        </div>
    </div >
</div >
   </>
  )
}
