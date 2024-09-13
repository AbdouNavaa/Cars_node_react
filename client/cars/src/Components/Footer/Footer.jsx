import React, {useEffect} from 'react'
import './Footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Footer() {
        //Initialise Aos and set the default animation duration 
    useEffect(() =>{
        Aos.init(
            {
                duration:2000
            }
        )
    }, [])
    return (
        <div className='footer'>
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">
                    {/* Single grid1 */}
                    <div  data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">About</span>
                        <ul className="footerUl grid">
                            <li className="footerLi">How is works</li>
                            <li className="footerLi">Careers</li>
                            <li className="footerLi">Affliates</li>
                            <li className="footerLi">Medai</li>
                        </ul>
                    </div>

                    {/* Single grid2 */}
                    <div data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">Became Seller</span>
                        <ul className="footerUl grid">
                            <li className="footerLi">Add Vehicules</li>
                            <li className="footerLi">Ressources Center</li>
                            <li className="footerLi">Bonds</li>
                            <li className="footerLi">Release Dates</li>
                        </ul>
                    </div>

                    {/* Single grid3 */}
                    <div data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">Community</span>
                        <ul className="footerUl grid">
                            <li className="footerLi">Recommandations</li>
                            <li className="footerLi">Gift Cards</li>
                            <li className="footerLi">Top Ups</li>
                            <li className="footerLi">Selling</li>
                        </ul>
                    </div>


                    {/* Single grid4 */}
                    <div data-aos='fade-up' className="singleGrid">
                        <span className="footerTitle">Booking Support</span>
                        <ul className="footerUl grid">
                            <li className="footerLi">Updates</li>
                            <li className="footerLi">Help center</li>
                            <li className="footerLi">Garages</li>
                            <li className="footerLi">Trust & Safety</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
