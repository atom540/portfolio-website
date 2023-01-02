
import React from 'react'
import './Header.css'
import Me from'../image/me.png'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import CV from '../image/CV.pdf'
const Navbar = () => {
  return (
    <header>
        <div className="container header_container">
          <h5> Hello I'm</h5>
          <h1>Sumit Kumar</h1>
          <h5>Full Stack Developer</h5>

          <div className="button">
            {/* <button  className="btn btn1">Download CV</button>
            <button  className="btn btn2">Let's Talk</button> */}
            <a href={CV}download className="btn btn1">Download CV</a>
            <a href="#" className="btn btn2">Let's Talk</a>
            </div>

            <div className="box">

           
            <div className="icons">
                <a href="#"><AiOutlineLinkedin/></a>

                <a href="#"><AiFillGithub/></a>

                <a href="#"><SiLeetcode/></a>
            </div>
            <div className="image">
              <img src={Me} alt="" />
            </div>

            <div className="scroll">
            <a href="#"> Scroll down</a>
             
            </div>
        </div>
        </div>
    </header>
  )
}

export default Navbar
