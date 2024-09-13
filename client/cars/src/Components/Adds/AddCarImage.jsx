import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddCarImage = () => {
    const { id } = useParams()

    const navigate = useNavigate()
    const [carImage, setCarImage] = useState({
        car_id: id,
        car_image: '',
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('car_id', carImage.car_id); // Le fichier s_image
        formData.append('car_image', carImage.car_image); // Le fichier s_image
        axios.post('http://localhost:3000/auth/add_carImage', formData)
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

                <h2 className='text-center'>Add carImage {id}</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                <div className='col-12 mb-3'>
                        <label htmlFor="inputGroupFile01" className='form-label'>Select Image</label>
                        <input type="file" id="inputGroupFile01" name='car_image'
                            onChange={(e) => setCarImage({ ...carImage, car_image: e.target.files[0] })}
                            className='form-control rounded-0' />
                    </div>
    
                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add carImage</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddCarImage