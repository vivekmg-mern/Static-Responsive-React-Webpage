import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <div  style={{height: '300px', backgroundColor:'pink', }} className='mt-5 ms-0  w-100' ><br />
        <div  className='d-flex justify-content-between ms-5 '>
          {/* intro */}
          <div style={{width: '400px'}} >
            <h5>Mr. Duck's Toy Manufacturer</h5>
            <p>Designed and built with all the love in the world by the our team. Specially designed Toys for the safety and comfort
              for our kids. Environment friendly materials are used. 
            </p>
          </div>

          {/* Links to={'/'}  to={'/home'}  to={'/history'}  */}
          <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'}  style={{textDecoration: 'none', color:'black'}} >Landing Page</Link>
          <Link to={'./Home/#hm'}  style={{textDecoration: 'none', color:'black'}} >Home Page</Link>
 
          </div>

          {/* Address Office */}
          <div className='d-flex flex-column'>
          <h5>Office Address</h5>
            <p>Plot No:24, Industrial Area,<br />
              Kochi, Kerala
            </p>
          </div>

          

          {/* Contacts */}
          <div className='d-flex flex-column'>
          <h5>Contact US</h5>
          <div className='d-flex justify-content-between mt-3'>
            <input type="text" placeholder='Email..' className='form-control me-2' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>

          <div className='d-flex justify-content-between mt-3'>
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration: 'none', color:'black'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/" style={{textDecoration: 'none', color:'black'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://in.linkedin.com/" style={{textDecoration: 'none', color:'black'}} target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/" style={{textDecoration: 'none', color:'black'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="https://github.com/" style={{textDecoration: 'none', color:'black'}} target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="https://www.wikipedia.org/" style={{textDecoration: 'none', color:'black'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
          </div>


          </div>
          <div></div>

        </div><br /><br />
        <p className='text-center mt-3'>Mr. Duck Limited © 2025. Website crafted by VMG.</p>
      </div>
  )
}

export default Footer