import React from 'react'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import img1 from "../../assets/sa.webp"
import img2 from "../../assets/pexels-any-lane-5945763.jpg"

function Main() {
  return (
    <div>
        <h2>Main</h2>
        <Navbar matn = {"hello world"} age = {28} />
        <Banner title={"iPhone 15 pro"} price ={1119} bg={img1} />
        <Banner title={"Galaxy s22 ultra"} price ={999} bg={img2} />



        <div className="container">
          <Banner/>
        </div>
    </div>
  )
}

export default Main