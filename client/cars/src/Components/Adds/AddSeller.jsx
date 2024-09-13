import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddSeller = () => {
    const navigate = useNavigate()
    const [seller, setSeller] = useState({
        s_name: '',
        s_image: '',
        max_price: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('s_name', seller.s_name);
        formData.append('s_image', seller.s_image); // Le fichier s_image
        formData.append('max_price', seller.max_price);
        axios.post('http://localhost:3000/auth/add_seller', formData)
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

                <h2 className='text-center'>Add Seller</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setSeller({ ...seller, s_name: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                            <label htmlFor="max_price" className='form-label'>max_prix</label>
                            <input type="number" id="year" 
                                onChange={(e) => setSeller({ ...seller, max_price: e.target.value })}
                                className='form-control rounded-0' />
                        </div>



                    <div className='col-12 mb-3'>
                        <label htmlFor="inputGroupFile01" className='form-label'>Select Image</label>
                        <input type="file" id="inputGroupFile01" name='s_image'
                            onChange={(e) => setSeller({ ...seller, s_image: e.target.files[0] })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add Seller</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddSeller