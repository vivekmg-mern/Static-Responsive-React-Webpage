import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import '/src/assets/Icon Final.png'

const Landing = () => {
  return (


    <div>
        <div>
    
 <div className ='bck justify-content-center d-flex align-items-center flex-direction: column'>
<h1 className='text-white font-size-600'>Welcome to Mr. Duck's <span><h3  className='text-white'>The Premium Toy Shop!!!</h3></span>
<span ><h5><Link to={'/Home'}><button className= 'btn btn-dark'>Explore Here</button></Link></h5></span> </h1>

 </div>
      </div>
    </div>
  )
}

export default Landing