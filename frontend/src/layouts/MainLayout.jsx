import React from 'react'
import { Form } from '../Components/Form/Form'
import './MainLayout.css'

export const MainLayout = () => {
  return (
    <div className='main_Container'>
        <div className='container'>

          <div className='sectionOne'>   
        <div className='header_logo'>
          <div className='logo'>
            <img src="/images/logo.jpg" alt="" />
          </div>
          <div style={{display :"flex" , alignItems  :"center"}}>
            <p style={{fontSize : "1.2rem" , fontWeight : "600" , alignSelf : "center"}}>She Can Foundation</p>
            </div>
        </div>
        <div className='image_Gallery'>
          <p className='para'>Together We Can  Change <br /> <span style={{color :"red"}}>The World</span> </p>
        <div>
          <img src="/images/img1.jpg" alt="" />
        </div>
         <div>
          <img src="/images/img2.jpg" alt="" />
        </div>
        </div>
          </div>

        <div className='sectionTwo'>
          <div >
         <Form/>
          </div>
        </div>
   </div>
    </div>
  )
}
