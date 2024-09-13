import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddTrim = () => {
    const navigate = useNavigate()
    const [trim, setTrim] = useState({
        t_name: '',
        model_id: '',
    })

    const [model, setModel] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/models')
            .then(result => {
                if (result.data.Status) {

                    setModel(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err)) 
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('t_name', trim.t_name);
        formData.append('model_id', trim.model_id);
        console.log(FormData);
        
        axios.post('http://localhost:3000/auth/add_trim', formData)
        .then(result => {
            if (result.data.Status) {
                navigate('/add_car')
            } else {
                console.log(result.data.Status);
                
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className="p-3 rounded w-50 border">

                <h2 className='text-center'>Add trim</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setTrim({ ...trim, t_name: e.target.value })}
                            className='form-control rounded-0' />
                    </div>


                    <div className='col-12'>
                        <label htmlFor="model_id" className='form-label'>Model</label>
                        <a href="/add_model" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='model_id' id='model_id' className='form-select'
                            onChange={(e) => setTrim({ ...trim, model_id: e.target.value })} >
                            {
                                model.map((m) => {
                                    return <option key={m.m_id} value={m.m_id}>{m.m_name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add trim</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddTrim