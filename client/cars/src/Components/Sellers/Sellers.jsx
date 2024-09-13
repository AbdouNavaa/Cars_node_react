import React, {useEffect} from 'react'
import './Sellers.css'
import toyotaLog from '../../assets/toyota_logo.jpeg'
import mercedesLog from '../../assets/mercedes_logo.jpeg'
import volkwLog from '../../assets/volkswagen-logo2.png'
import hyundaiLog from '../../assets/honda_logo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Sellers() {
        //Initialise Aos and set the default animation duration 
    useEffect(() =>{
        Aos.init(
            {
                duration:2000
            }
        )
    }, [])
    return (
        <div className='sellers section'>
            <div className="secContainer container">
                <div  data-aos='fade-up' className="secHeading grid">
                    <h3 className="secTitle">
                        Explore top sellers in town
                    </h3>

                    <p>
                        Joseph Samuel Girard hold the Guinness World for being the 
                        greatest salesman in the world. 
                    </p>
                </div>

                <div className="sellersContainer grid">
                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={toyotaLog} alt="img" />
                        </div>

                        <span className="info">
                            <h4 className="name">
                                Toyota</h4>
                        </span>
                        <p>from $40k</p>
                    </div>

                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={mercedesLog} alt="img" />
                        </div>

                        <span className="info">
                            <h4 className="name">
                                Mercedes Benz</h4>
                        </span>
                        <p>from $60k</p>
                    </div>

                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={volkwLog} alt="img" />
                        </div>

                        <span className="info">
                            <h4 className="name">
                                Volkswagen</h4>
                        </span>
                        <p>from $35k</p>
                    </div>

                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={hyundaiLog} alt="img" />
                        </div>

                        <span className="info">
                            <h4 className="name">
                                Hyundai</h4>
                        </span>
                        <p>from $23</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
