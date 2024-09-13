import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const AddCar = () => {
    const navigate = useNavigate()
    const [car, setCar] = useState({
        title: '',
        year: '',
        price: '',
        speed: '',
        seller_id: '',
        model_id: '',
        trim_id: '',
        excolor: '',
        intercolor: '',
        cylinder_id: '',
        fuel_id: '',
        image: '',
    })
    const [seller, setSeller] = useState([])
    const [model, setModel] = useState([])
    const [trim, setTrim] = useState([])
    const [fuel, setFuel] = useState([])
    const [cylinder, setCylinder] = useState([])
    const [color, setColor] = useState([])
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

            axios.get('http://localhost:3000/auth/models')
            .then(result => {
                if (result.data.Status) {

                    setModel(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
        
            axios.get('http://localhost:3000/auth/trims')
            .then(result => {
                if (result.data.Status) {

                    setTrim(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))    

            axios.get('http://localhost:3000/auth/colors')
            .then(result => {
                if (result.data.Status) {

                    setColor(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

            axios.get('http://localhost:3000/auth/cylinders')
            .then(result => {
                if (result.data.Status) {

                    setCylinder(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

            axios.get('http://localhost:3000/auth/fuel_types')
            .then(result => {
                if (result.data.Status) {

                    setFuel(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', car.title);
        formData.append('year', car.year);
        formData.append('price', car.price);
        formData.append('speed', car.speed);
        formData.append('seller_id',car.seller_id);
        formData.append('image', car.image); // Le fichier image
        formData.append('model_id', car.model_id);
        formData.append('trim_id', car.trim_id);
        formData.append('cylinder_id', car.cylinder_id);
        formData.append('fuel_id', car.fuel_id);
        formData.append('exColor', car.excolor);
        formData.append('intercolor', car.intercolor);
        axios.post('http://localhost:3000/auth/add_car', formData)
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

                <h2 className='text-center'>Add car</h2>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label htmlFor="inputName" className='form-label'>Name</label>
                        <input type="text" id="inputName" placeholder="Enter Name"
                            onChange={(e) => setCar({ ...car, title: e.target.value })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='row'>
                        <div className='col-4'>
                            <label htmlFor="year" className='form-label'>Yea</label>
                            <input type="number" id="year" 
                                onChange={(e) => setCar({ ...car, year: e.target.value })}
                                className='form-control rounded-0' />
                        </div>

                        <div className='col-4'>
                            <label htmlFor="price" className='form-label'>Price</label>
                            <input type="text" id="price" 
                                onChange={(e) => setCar({ ...car, price: e.target.value })}
                                className='form-control rounded-0' />
                        </div>

                        <div className='col-4'>
                            <label htmlFor="inputspeed" className='form-label'>Speed</label>
                            <input type="text" id="inputspeed"
                                onChange={(e) => setCar({ ...car, speed: e.target.value })}
                                className='form-control rounded-0' />
                        </div>

                    </div>

                    <div className='col-12'>
                        <label htmlFor="seller" className='form-label'>Seller</label>
                        <a href="/add_seller" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='seller_id' id='seller_id' className='form-select'
                            onChange={(e) => setCar({ ...car, seller_id: e.target.value })} >
                            {
                                seller.map((s) => {
                                    return <option key={s.s_id} value={s.s_id}>{s.s_name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='col-12'>
                        <label htmlFor="model" className='form-label'>Model</label>
                        <a href="/add_model" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='model_id' id='model_id' className='form-select'
                            onChange={(e) => setCar({ ...car, model_id: e.target.value })} >
                            {
                                model.map((m) => {
                                    return <option key={m.m_id} value={m.m_id}>{m.m_name}</option>
                                })
                            }
                        </select>
                    </div>


                    <div className='col-12'>
                        <label htmlFor="trim" className='form-label'>Trim</label>
                        <a href="/add_trim" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='trim_id' id='trim_id' className='form-select'
                            onChange={(e) => setCar({ ...car, trim_id: e.target.value })} >
                            {
                                trim.map((t) => {
                                    return <option key={t.t_id} value={t.t_id}>{t.t_name}</option>
                                })
                            }
                        </select>
                    </div>


                    <div className='col-12'>
                        <label htmlFor="excolor" className='form-label'>Excolor</label>
                        <a href="/add_color" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='excolor' id='excolor' className='form-select'
                            onChange={(e) => setCar({ ...car, excolor: e.target.value })} >
                            {
                                color.map((ex) => {
                                    return <option key={ex.col_id} value={ex.col_id}>{ex.name}</option>
                                })
                            }
                        </select>
                    </div>


                    <div className='col-12'>
                        <label htmlFor="intercolor" className='form-label'>intercolor</label>
                        <select name='intercolor' id='intercolor' className='form-select'
                            onChange={(e) => setCar({ ...car, intercolor: e.target.value })} >
                            {
                                color.map((i) => {
                                    return <option key={i.col_id} value={i.col_id}>{i.name}</option>
                                })
                            }
                        </select>
                    </div>



                    <div className='col-12'>
                        <label htmlFor="cylinder" className='form-label'>Cylinder</label>
                        <a href="/add_cylinder" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='cylinder_id' id='cylinder_id' className='form-select'
                            onChange={(e) => setCar({ ...car, cylinder_id: e.target.value })} >
                            {
                                cylinder.map((c) => {
                                    return <option key={c.cy_id} value={c.cy_id}>{c.cy_name}</option>
                                })
                            }
                        </select>
                    </div>



                    <div className='col-12'>
                        <label htmlFor="fuel" className='form-label'>Fuel</label>
                        <a href="/add_fuel" className="link"><i className='fs-4 bi-plus ms-2'>+</i></a>
                        <select name='fuel_id' id='fuel_id' className='form-select'
                            onChange={(e) => setCar({ ...car, fuel_id: e.target.value })} >
                            {
                                fuel.map((f) => {
                                    return <option key={f.f_id} value={f.f_id}>{f.f_name}</option>
                                })
                            }
                        </select>
                    </div>





                    <div className='col-12 mb-3'>
                        <label htmlFor="inputGroupFile01" className='form-label'>Select Image</label>
                        <input type="file" id="inputGroupFile01" name='image'
                            onChange={(e) => setCar({ ...car, image: e.target.files[0] })}
                            className='form-control rounded-0' />
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-primary w-100 '>Add car</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddCar