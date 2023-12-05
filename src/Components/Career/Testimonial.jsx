import React from 'react'

import { } from "../../Assets/carrers/testimonials/1.png";
const Testimonial = ({ name, image, testimonial }) => {
    return (
        <div className='text-white border border-white w-full h-full'>
            <h2>{name}</h2>
            <img className='' src={image} />
            <h2>{testimonial}</h2>
        </div>
    )
}

export default Testimonial