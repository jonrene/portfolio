import React from 'react';

export default function Contact(){
    return(
        <>
           <section className='contact-section' id='contact-section'>
                <div className='contact-container'>
                    <div>
                        <h3>CONTACT</h3>
                        <div className='contacts-box'>
                            <li className='contact'>
                                <div className='contact-image'><img src='./skillsPhotos/mail.png' alt='mail'></img></div>
                                <div className='contact-title'>
                                    <h3>Email</h3>
                                    <a href='mailto:jrjonathanrene@gmail.com'>jrjonathanrene@gmail.com</a>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}