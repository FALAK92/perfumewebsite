
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-20">
      
      
      <div className="w-full  md:w-1/2">
        <div className="animate-slide-in">
          <Image 
            src="/p1r.png"  
            alt="Perfume" 
            className="rounded-b-lg" 
            width={600} 
            height={600} 
            layout="responsive" 
          />
        </div>
      </div>

      
      <div className="w-full md:w-1/2 mt-5 md:mt-0">
      <div style={{ animation: 'fade-in 0.5s ease-out forwards' }}>
  <h1 className="text-5xl font-bold mb-5 text-pink-900">Our Little Story</h1>
  


          <p className='text-pink-900 text-xl' >
            Welcome to our perfume shop! We believe that fragrance is a personal experience that can enhance your mood and transform your day. Our journey started with a passion for unique scents and a desire to share that love with the world.
          </p>
          <br></br>
          <p className='text-pink-900 text-xl'>
            Each bottle is crafted with care, using the finest ingredients to create captivating aromas that tell a story. Join us as we explore the art of fragrance and find the perfect scent for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


