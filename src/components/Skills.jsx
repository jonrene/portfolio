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
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/html.png' alt='html'></img></div>
                                HTML
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/css.png' alt='css'></img></div>
                                CSS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/js.png' alt='javascript'></img></div>
                                JavaScript
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/react.png' alt='reactjs'></img></div>
                                ReactJS
                            </li>
                        </ul>
                    </div>
                    <div className='skills-box'>
                        <h3>Back-End Development</h3>
                        <ul>
                        <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/node.png' alt='nodejs'></img></div>
                                NodeJS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/express.png' alt='expressjs'></img></div>
                                ExpressJS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/pug.png' alt='pug'></img></div>
                                Pug
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/db.png' alt='mongodb'></img></div>
                                MongoDB
                            </li>
                        </ul>
                    </div>
                    <div className='skills-box'>
                        <h3>Other Skills</h3>
                        <ul>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/vite.png' alt='python'></img></div>
                                Vite/Vitest
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/vue.png' alt='git'></img></div>
                                VueJS
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/pinia.png' alt='pinia'></img></div>
                                Pina
                            </li>
                            <li className='skills-list-item'>
                                <div className='skill-image'><img src='./src/assets/skillsPhotos/git.png' alt='git'></img></div>
                                Git
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}