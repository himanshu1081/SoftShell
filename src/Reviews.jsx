import React, { useState } from 'react';
import './Reviews.css';
import Ananya from './assets/ananya.jpeg'
import Sarah from './assets/sarah.jpeg'
import Daniel from './assets/daniel.jpeg'


const testimonials = [
  {
    name: "Ananya Mehta",
    image: Ananya,
    role: "IT Manager",
    company: "Corebyte Solutions",
    review: "SoftSell made it incredibly easy to resell our unused software licenses. The process was smooth, and we got paid faster than expected!"
  },
  {
    name: "Daniel Becker",
    image:Daniel,
    role: "Procurement Lead",
    company: "NexaTech GmbH",
    review: "Excellent service with transparent valuations. We recovered value from old licenses we thought were worthless. Highly recommended!"
  },
  {
    name: "Sarah Lewis",
    image:Sarah,
    role: "Operations Head",
    company: "TechWave Ltd.",
    review: "We love how easy and straightforward SoftSell’s process is. They delivered exactly what they promised!"
  }
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); 
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <img className="customer-image" src={testimonials[currentIndex].image} alt="client" />
        <p className="review">"{testimonials[currentIndex].review}"</p>
        <h3 className="name">{testimonials[currentIndex].name}</h3>
        <p className="role">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
      </div>
      <div className="controls">
        <button onClick={handlePrev} className="prev-button">❮</button>
        <button onClick={handleNext} className="next-button">❯</button>
      </div>
    </div>
  );
}

export default Reviews;
