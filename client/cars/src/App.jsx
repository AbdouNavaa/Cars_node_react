import React from 'react'
import './App.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Body from './Components/Body';
import AddCar from './Components/AddCar/AddCar';
import AddSeller from './Components/Adds/AddSeller';
import AddCylinder from './Components/Adds/AddCylinder';
import AddFuelType from './Components/Adds/AddFuel_type';
import AddTrim from './Components/Adds/AddTrim';
import AddModel from './Components/Adds/AddModel';
import AddColor from './Components/Adds/AddColor';
import Trending from './Components/Trending/Trending';
import Auction from './Components/Auction/Auction';
import CarDeatils from './Components/Details/CarDeatils';
import AddCarImage from './Components/Adds/AddCarImage';
import SignUp from './Components/Account/SignUp';
import Login from './Components/Account/Login';
export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>} ></Route>
      <Route path='/trendings' element={<Trending/>} ></Route>
      <Route path='/cars' element={<Auction/>} ></Route>
      <Route path='/add_car' element={<AddCar/>} ></Route>
      <Route path='/add_seller' element={<AddSeller/>} ></Route>
      <Route path='/add_model' element={<AddModel/>} ></Route>
      <Route path='/add_trim' element={<AddTrim/>} ></Route>
      <Route path='/add_color' element={<AddColor/>} ></Route>
      <Route path='/add_fuel' element={<AddFuelType/>} ></Route>
      <Route path='/add_cylinder' element={<AddCylinder/>} ></Route>
      <Route path='/details/:id/:seller_id' element={<CarDeatils/>} ></Route>
      <Route path='/add_carImage/:id' element={<AddCarImage/>} ></Route>
      <Route path='/signup' element={<SignUp/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}
