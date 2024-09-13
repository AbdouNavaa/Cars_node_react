import React, {useEffect} from 'react'
import './Home.css'
import homeImage from '../../assets/honda_car3.webp'

// import Aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {

    //Initialise Aos and set the default animation duration 
    useEffect(() =>{
        Aos.init(
            {
                duration:2000
            }
        )
    }, [])
    return (
        <div className='home'>
            <div className='secContainer'>
                <div data-aos='fade-up' className='homeText'>
                    <span className="homeSpan">
                        Meet your new Car
                    </span>
                    <h1 className="homeTitle">
                        Honda Civic Type R
                    </h1>

                    <div className="btns flex">
                        <button data-aos='fade-right' className="btn">MoreDetails</button>
                        <button data-aos='fade-left' className="btn primaryBtn">Test Drive</button>
                    </div>
                </div>

                <div data-aos='fade-down-right' className="homeImage">
                    <img src={homeImage} alt="Home Image" />
                </div>
            </div>
        </div>
    )
}
