import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddModel = () => {
    const navigate = useNavigate()
    const [model, setModel] = useState({
        m_name: '',
        seller_id: '',
    })

    const [seller, setSeller] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/sellers')
            .then(result => {
                if (result.data.Status) {

                    setSeller(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('m_name', model.m_name);
        formData.append('seller_id', model.seller_id);
        axios.post('http://localhost:3000/auth/add_model', formData)
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

                <h2 className='text-center'>Add Model</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setModel({ ...model, m_name: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <label htmlFor="seller" className='form-label'>Seller</label>
                        <a href="/add_seller" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='seller_id' id='seller_id' className='form-select'
                            onChange={(e) => setModel({ ...model, seller_id: e.target.value })} >
                            {
                                seller.map((s) => {
                                    return <option key={s.s_id} value={s.s_id}>{s.s_name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add Model</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddModel