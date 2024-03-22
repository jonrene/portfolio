import React from 'react'

export default function Skills(){
    return(
        <>
            <section className='skills-section' id='skills-section'>
                <h3>SKILLS</h3>
                <div className='skills-container'>
                    <div className='skills-box'>
                        <h3>Front-End Development</h3>
                        <ul>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/html.png' alt='html'></img></div>
                                HTML
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/css.png' alt='css'></img></div>
                                CSS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/js.png' alt='javascript'></img></div>
                                JavaScript
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/react.png' alt='reactjs'></img></div>
                                ReactJS
                            </li>
                        </ul>
                    </div>
                    <div className='skills-box'>
                        <h3>Back-End Development</h3>
                        <ul>
                        <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/node.png' alt='nodejs'></img></div>
                                NodeJS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/express.png' alt='expressjs'></img></div>
                                ExpressJS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/pug.png' alt='pug'></img></div>
                                Pug
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/db.png' alt='mongodb'></img></div>
                                MongoDB
                            </li>
                        </ul>
                    </div>
                    <div className='skills-box'>
                        <h3>Other Skills</h3>
                        <ul>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/java.png' alt='python'></img></div>
                                Java
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/database.png' alt='git'></img></div>
                                SQL
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/python.png' alt='python'></img></div>
                                Python
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./skillsPhotos/git.png' alt='git'></img></div>
                                Git
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}