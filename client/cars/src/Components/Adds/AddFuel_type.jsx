import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddFuelType = () => {
    const navigate = useNavigate()
    const [fuel_type, setFuel] = useState({
        f_name: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('f_name', fuel_type.f_name);
        axios.post('http://localhost:3000/auth/add_fuel_type', formData)
        .then(result => {
            if (result.data.Status) {
                navigate('/add_car')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className="p-3 rounded w-50 border">

                <h2 className='text-center'>Add Fuel Type</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setFuel({ ...fuel_type, f_name: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add Fuel Type</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddFuelType