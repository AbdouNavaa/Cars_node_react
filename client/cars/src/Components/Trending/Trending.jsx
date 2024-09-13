import React, { useEffect, useState } from 'react'
import './Trending.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import car1 from '../../assets/650S.jpeg'
import car2 from '../../assets/lamborgini_car.jpeg'
import car3 from '../../assets/mercedes_2024.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

export default function Trending() {
    const [car, setCar] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/trending_cars')
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
        <Search />
        <div className='trending section'>
            <div className="secContsiner container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Trending Near You
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
                                <img src={`http://localhost:3000/Images/` + c.image} alt="Car Image" />
                            </div><h5 className="carTitle">
                                {c.title}
                                {/* {c.seller_id.name} {c.model} */}
                            </h5><span className="miles">
                                {c.speed} Miles
                            </span><span className="AWD">
                                AWD 4-Cylinder Turbo
                            </span><div className="price_seller flex">
                                <span className="price">
                                    ${c.price}
                                </span>

                                <span className="seller">Best Seller</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div></div>
    )
}
