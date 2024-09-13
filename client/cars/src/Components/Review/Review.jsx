import React, {useEffect} from 'react'
import './Review.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import avatar1 from '../../assets/friend-01.jpg'
import avatar2 from '../../assets/friend-02.jpg'
import avatar3 from '../../assets/team-01.png'
import rev1 from '../../assets/direction1.jpeg'
import rev2 from '../../assets/direction2.jpg'
import rev3 from '../../assets/direction4.jpg'
import { AiFillStar } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Review() {
        //Initialise Aos and set the default animation duration 
    useEffect(() =>{
        Aos.init(
            {
                duration:2000
            }
        )
    }, [])
    return (
        <div className='review section'>
            <div className="secContainer container">
                <div  data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                {/* Review container */}
                <div className="reviewContainer grid">
                    {/* single Review */}
                    <div data-aos='fade-up' className="singleReview grid">
                        <div className="imgDiv">
                            <img src={rev1} alt="" />
                        </div>
                        <h5 className="reviewTitle">2023 Cadiallac
                        </h5>

                        <span className="desc">
                            Good cars are safe, fast, affrodable to purchase, economical to
                            operate, reliable, capacious, confortable and attractive.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={avatar1} alt="Reviewer Image" />
                                </div>

                                <div className="aboutReviewer">
                                    <span className="name">
                                        Abdou Nafaa
                                    </span>
                                    <p>Chef Editor</p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <AiFillStar className='icon'/>
                                <blockquote>4.48</blockquote>
                            </div>
                        </div>
                    </div>

                    {/* single Review */}
                    <div data-aos='fade-up' className="singleReview grid">
                        <div className="imgDiv">
                            <img src={rev2} alt="" />
                        </div>
                        <h5 className="reviewTitle">
                            2024 Cadiallac
                        </h5>

                        <span className="desc">
                            Good cars are safe, fast, affrodable to purchase, economical to
                            operate, reliable, capacious, confortable and attractive.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={avatar2} alt="Reviewer Image" />
                                </div>

                                <div className="aboutReviewer">
                                    <span className="name">
                                        Ahmed Nafaa
                                    </span>
                                    <p>CYt Admin</p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.48</blockquote>
                            </div>
                        </div>
                    </div>

                    {/* single Review */}
                    <div data-aos='fade-up' className="singleReview grid">
                        <div className="imgDiv">
                            <img src={rev3} alt="" />
                        </div>
                        <h5 className="reviewTitle">
                            2025 Cadiallac
                        </h5>

                        <span className="desc">
                            Good cars are safe, fast, affrodable to purchase, economical to
                            operate, reliable, capacious, confortable and attractive.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={avatar3} alt="Reviewer Image" />
                                </div>

                                <div className="aboutReviewer">
                                    <span className="name">
                                        Brahim Nafaa
                                    </span>
                                    <p>Manager Atlantis</p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.48</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
