import { useState } from "react";
import './Tabs.css';


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
          <h1>{city}</h1>
          <hr/>
          <p>
            {map[city]}
          </p>
        </div>
          )
        })}

      </div>
    </div>
  );
}

export default Tabs;
