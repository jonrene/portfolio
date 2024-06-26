export default function MenuButton(){

    function menuClick(e) {
        e.preventDefault();
        document.getElementsByClassName('overlay')[0].style.display = 'block';
    }
    
    return(
        <>
            <button className="menu-button" onClick={ menuClick }>
                <img className="menu-button-img" src="./src/assets/hamburgerMenu.png" alt="menu" />
            </button>
        </>
    )
}