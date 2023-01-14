import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/03.jpg"
import img2 from "../assets/04.jpg"

const Services = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000}
      showThumbs={false} showIndicators={true}>
        <div>
          <img src={img1} alt="services1" />
          <p className='legend'>Full Stack Developer</p>
        </div>

        <div>
          <img src={img2} alt="services2" />
          <p className='legend'>Developers Available Here</p>
        </div>



      </Carousel>
    </div>
  )
}

export default Services