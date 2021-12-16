import React from 'react';
import { useState, useEffect } from 'react';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Privacy from './components/Privacy.jsx';
import Nav from './components/Nav';
import Thankyoupage from './components/Thankyoupage.jsx';
import '../src/styles/App.css';
import catimg from './pictures/cat_header.jpg'
import footer_img from './pictures/footer_img.png'
import insta from './pictures/Instagram_icon.png'
import ContactUs from './components/ContactUs.jsx';
import Artworks from './components/Artworks.jsx'

function App() {

  let defaultPage = document.location.hash.replace("#","");
  if(defaultPage === 'main__content') defaultPage = 'Home';
  const [page, setPage] = useState(defaultPage || 'Home');

  function navigate() { window.location.href = "https://www.instagram.com/saraaaawang/"; }

  return (
    <div className="app">
      <div className='header__section'>
        <img className='header__img' src={catimg} alt='cat header image'/>
        <h1>Welcome to Sara's Gallary !!! :)</h1>
        <a className='skip__link' href='#main__content'> Skip to Main Content </a>
      </div>

      <div className='header__div'>
        <Nav page={page} setPage={setPage}/>
        {page=== 'Home' && <Home/>}
        {page=== 'About' && <About/>}
        {page=== 'Privacy' && <Privacy/>}
        {page=== 'Artworks' && <Artworks/>}
        {page=== 'ContactUs' && <ContactUs setPage={setPage}/>}
        {page=== 'Thankyoupage' && <Thankyoupage/>}

      </div>

      <div className='footer__div'>
        <img className='footer__img' src={footer_img} alt='footer image that contains 5 cartoon characters'/>
        <ul className='footer__statement'>
          <li>
            Stay Tuned for More Drawings :) &#9786; 
          </li>
          <li>
            Image is from : pixabay.com | License : Unknown
          </li>
          <li>Follow Sara on Instagram &nbsp; &nbsp; &nbsp; &#10158; <a className='insta__link' onClick={() => navigate()} href='https://www.instagram.com/saraaaawang/'><img className='insta__pic' src={insta} alt='instagram logo'/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
