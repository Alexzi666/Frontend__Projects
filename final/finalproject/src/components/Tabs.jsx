import { useState } from "react";
import '../styles/Tabs.css';


function Tabs({map}) {
  const [isSelected, setIsSelected] = useState(1);

  function toggleTab (index)  {
    return  setIsSelected(index);
  };

  return (
    <div className="container">
      <div className="tabs_header">
        {Object.keys(map).map( (city, index) => {
          let curIndex = index + 1;
          return (
            <button
            key={index}
            className={isSelected === curIndex ? "tabs selected-tabs" : "tabs"}
            onClick={() => toggleTab(curIndex)}
            >
              {city}
            </button>
          )
        })}
      </div>

      <div className="tabs-content">

        {Object.keys(map).map( (city, index) => {
          let curIndex = index + 1;
          return (
          <div
          key={index}
          className= {`content ${isSelected === curIndex ? "selected-content" : "content"}`} 
        >
          <h1>{map[city].text0}</h1>
          <hr/>

          <main className='main__tabs' id='main__content'>
            <div className='main__left'>
                <p className='bio__header'>{map[city].text1}</p>
                <hr/>
                <img src={map[city].img} alt="Sara/Alex photos"/>
            </div>
            
            <div className='main__right'>

                <ul className='right__div'>
                    <li className='div__header'>{map[city].text2}</li>
                    <hr/>
                    <li className='div__main'>{map[city].text3}</li>
                </ul>
            </div>
          </main>

        </div>
          )
        })}
      </div>
    </div>
  );
}

export default Tabs;
