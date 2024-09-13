import React from 'react'
import './Body.css'
import Auction from './Auction/Auction'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Search from './Search/Search'
import Trending from './Trending/Trending'
import Sellers from './Sellers/Sellers'
import Review from './Review/Review'
import Footer from './Footer/Footer'
export default function Body() {
    return (
        <div>
            <Navbar />
            <Home />
            <Search />
            <Trending />
            <Sellers />
            <Auction />
            <Review />
            <Footer />
        </div>
    )
}
