import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './CarDetails.css'


const CarDeatils = () => {
    const { id, seller_id } = useParams();  // Récupère l'ID de la voiture et du vendeur à partir de l'URL
    const [car, setCar] = useState([]);
    const [sameCars, setSameCars] = useState([]);

    // Modifie le useEffect pour écouter les changements d'ID et de seller_id
    useEffect(() => {
        axios.get(`http://localhost:3000/auth/car/${id}`)
            .then(result => {
                if (result.data.Status) {
                    setCar(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));

        axios.get(`http://localhost:3000/auth/sller_cars/${id}/${seller_id}`)
            .then(result => {
                if (result.data.Status) {
                    setSameCars(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, [id, seller_id]);  // Ajoute id et seller_id comme dépendances

    return (
        <>
            <Navbar />

            <div className='details'>
                <div className="car-details section">
                    <h1 className="heading">Car details</h1>

                    {car.map(c => (
                        <div className="row" key={c.id}>
                            <div className="column">
                                <div className="thumb">
                                    <img src={`http://localhost:3000/Images/${c.image}`} className="d-block w-100" alt="Car Image" />
                                </div>
                            </div>
                            <div className="column">
                                <div className="tutor">
                                    <img src={`http://localhost:3000/Images/${c.s_image}`} alt="" />
                                    <div>
                                        <h3>{c.title}</h3>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="flex">
                                        <div className="grid">
                                            <p>Model: {c.m_name}</p>
                                            <p>Fuel Type: {c.f_name}</p>
                                            <p>Price: ${c.price}</p>
                                            <p>Speed: {c.speed} Miles</p>
                                        </div>
                                        <div className="grid">
                                            <p>with {c.likes} Likes</p>
                                            <p>Exterior Color: {c.name}</p>
                                            <p>Interior Color: {c.name}</p>
                                            <Link to={`/add_carImage/${c.id}`} className="primaryBtn">Add Image</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="same_cars">
                    <h1 className="heading">Cars from the same Seller {seller_id}</h1>
                    <div className="box-container">
                        {sameCars.map(c => (
                            <Link className="box" to={`/details/${c.id}/${c.seller_id}`} key={c.id}>
                                <img src={`http://localhost:3000/Images/${c.image}`} className="logo" alt="Car Image" />
                                <h3>{c.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarDeatils;


