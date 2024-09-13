import React, { useEffect, useState } from 'react'
import './Auction.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
export default function Auction() {

    const [car, setCar] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/cars')
            .then(result => {
                if (result.data.Status) {

                    setCar(result.data.Result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

    }, [])
    //Initialise Aos and set the default animation duration 
    useEffect(() => {
        Aos.init(
            {
                duration: 2000
            }
        )
    }, [])
    return (
        <div><Navbar />

        <div className='auction section'>
            <div className="secContsiner container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Active Auction
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                    {/* Single Car Div */}

                    {car.map(c => (
                        <div data-aos='fade-up' className="singleCar grid">
                            <div className="imgDiv">
                            <Link to={`/details/`+c.id+`/`+c.seller_id}>
                                <img src={`http://localhost:3000/Images/` + c.image} alt="Car Image" />
                                </Link>
                            </div>
                            <h5 className="carTitle">
                                {c.title}

                            </h5>
                            <span className="miles">
                                {c.speed} Miles
                            </span>

                            <span className="AWD">
                                AWD 4-Cylinder Turbo
                            </span>

                            <div className="price_buyBtn flex">
                                <span className="price">
                                    ${c.price}
                                </span>

                                <span className="buyBtn">Best Seller</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}
