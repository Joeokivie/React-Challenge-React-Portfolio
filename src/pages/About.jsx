import React from 'react';
    const About = () => {
        return (
            <section id="about">
              <div className="container mx-auto flex flex-col md:flex-row my-10">
                <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start px-4 sm:px-0">
                  <div className='text-center'>
                  <h2 className="text-3xl mb-4">About Me</h2>
                  </div>
                <div className="w-full md:w-1/2 py-6 text-center">
                  <img src={avatar} height={200} width={200} alt="avatar" className="rounded-full w-64 h-64 mx-auto" />
                </div>
                  <p className="mb-4 fs-4">Hi there! You can call me Joseph Okivie. I'm pursuing a career in software engineering by enrolling in programs at the Colombia Coding Bootcamp. I'm excited to explore the world of technology . I'm excited to combine my enthusiasm in javascript and react with my programming expertise. Through my coding bootcamp, I've had the chance to work with HTML, CSS, and JS for front-end development. Regarding backend programming, I have a strong curiosity about learning and have realized how crucial it is to apply what I study. Applying my knowledge and skills through this incredible training has allowed me to study more and broaden my knowledge as technology advances. I'm thrilled to be a part of the incredible world of technology, even though there will always be more to learn.</p>
                </div>
              </div>
            </section>
          );
        }
        
        export default About;