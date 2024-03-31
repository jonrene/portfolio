import React from 'react';

export default function About(){
    return(
        <>
            <section className='about-section' id='about-section'>
                <div className='about-container'>
                    <img className="about-image" src="./src/assets/front-end.png" alt='front-end developer'></img>
                    <div className='about-blurb'>
                        <h3>ABOUT ME</h3>
                        <p>
                            I'm a dedicated web developer with expertise in HTML, CSS, TypeScript, JavaScript, 
                            and modern frameworks like ReactJS, VueJS, and Express. I strive to create engaging and user-friendly web experiences with a strong emphasis on responsive 
                            design. As a lifelong learner, I continuously explore new trends and techniques to enhance my skills. I also thrive in collaborative team environments, delivering high-quality projects on time. 
                            Let's connect and bring ideas to life!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

