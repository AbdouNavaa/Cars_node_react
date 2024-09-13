import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const SignUp = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        email: '',
        nameComp: '',
        job: '',
        profile: '',
        gender: '',
        mobile: '',
        password: '',
    })

    const [gender, setGender] = useState(['man','woman'])
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('nameComp', user.nameComp);
        formData.append('job', user.job);
        formData.append('profile', user.profile); // Le fichier profile
        formData.append('gender', user.gender);
        formData.append('mobile', user.mobile);
        axios.post('http://localhost:3000/auth/signup', formData)
            .then(result => {
                if (result.data.Status) {
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

                <h2 className='text-center'>Sign Up</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id="email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" id="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="nameComp" className='form-label'>Name Complete</label>
                        <input type="text" id="nameComp"
                            onChange={(e) => setUser({ ...user, nameComp: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="job" className='form-label'>Job</label>
                        <input type="text" id="job"
                            onChange={(e) => setUser({ ...user, job: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12 mb-3'>
                        <label htmlFor="inputGroupFile01" className='form-label'>Select Image</label>
                        <input type="file" id="inputGroupFile01" name='profile'
                            onChange={(e) => setUser({ ...user, profile: e.target.files[0] })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="gender" className='form-label'>Gender</label>
                        <select name='gender' id='gender' className='form-select'
                            onChange={(e) => setUser({ ...trim, gender: e.target.value })} >
                            {
                                gender.map((g) => {
                                    return <option value={g}>{g}</option>
                                })
                            }
                        </select>
                    </div>
                    
                    <div className='col-12'>
                        <label htmlFor="mobile" className='form-label'>Mobile</label>
                        <input type="tel" id="mobile"
                            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
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

export default SignUp