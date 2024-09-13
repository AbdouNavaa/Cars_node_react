import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddColor = () => {
    const navigate = useNavigate()
    const [color, setColor] = useState({
        name: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', color.name);
        axios.post('http://localhost:3000/auth/add_color', formData)
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

                <h2 className='text-center'>Add Color</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setColor({ ...color, name: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add Color</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddColor