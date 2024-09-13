import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: '',
    })
    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/login', user)
            .then(result => {
                if (result.data.loginStatus) {
                    navigate('/')
                } else {
                alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className="p-3 rounded w-50 border">

                <h2 className='text-center'>Log In</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>User Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="password" className='form-label'>password</label>
                        <input type="password" id="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className='form-control rounded-0' />
                    </div>




                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add user</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login