import {useState} from 'react';
import '../styles/Nav.css'
import bee from '../pictures/bee.png'

function Nav({page, setPage}){

    function navTo(e, target){
        setPage(target)
    }

    const [isSelected, setIsSelected] = useState(true);

    function toggleTab (isSelected)  {
      if(isSelected === true) {setIsSelected(false)}
      else {setIsSelected(true)}
    };

    return (
        <nav className='menu'>
            <button className="menu__button" onClick={() => toggleTab(isSelected)} aria-expanded="false"
  aria-label="Menu_Open/Close">
                <svg viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
                
            </button>

            <ul className={!isSelected ? 'menu__bar' : 'menu__bar do_not_show'}>
                <img className='bee__img' src={bee} alt='bee menu image for decorating purpose'></img>
                <ul className='menu__barlist'>
                    <li className='menu__li'><a href="#Home" className='menu__link' onClick={(e) => navTo(e, 'Home')}> &#127968; Home</a></li>
                    <li className='menu__li'><a href="#About" className='menu__link' onClick={(e) => navTo(e, 'About')}>&#127775; About</a></li>
                    <li className='menu__li'><a href="#Artworks" className='menu__link' onClick={(e) => navTo(e, 'Artworks')}>&#9997; Art Works</a></li>
                    <li className='menu__li'><a href="#ContactUs" className='menu__link' onClick={(e) => navTo(e, 'ContactUs')}>&#128140; Gift from Us</a></li>
                    <li className='menu__li'><a href="#Privacy" className='menu__link' onClick={(e) => navTo(e, 'Privacy')}>&#10024; Privacy</a></li>
                </ul>
            </ul>
        </nav>
    )

}

export default Nav