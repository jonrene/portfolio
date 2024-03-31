export default function Overlay(){

    function menuClick(e){
        console.log("hello, world");
        document.getElementsByClassName('overlay')[0].style.display = 'none';
    }


    return(
        <>
            <div className='overlay'>
                <div className='overlay-links'>
                    <ul className="overlay-nav-links">
                        <a onClick={menuClick} href="#home-section">Home</a>
                        <a onClick={menuClick} href="#about-section">About</a>
                        <a onClick={menuClick} href="#skills-section">Skills</a>
                        <a onClick={menuClick} href="#project-section">Projects</a>
                        <a onClick={menuClick} href="#contact-section">Contact</a>
                    </ul>
                </div>
            </div>
        </>
    )
}