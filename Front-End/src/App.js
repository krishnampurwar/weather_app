import React, { useState, useEffect } from 'react';

// import axios
import axios from 'axios';
import style from './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Mumbai');
  const [inputValue, setInputValue] = useState('Mumbai');
  const [active, setActive] = useState(false);
  const handleInput = (e) => {
   setInputValue(e.target.value)
    
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    // if input value is not empty
    if (inputValue !== '') {
      // set location
   setLocation(inputValue)
      console.log(location)
     
    }

    }
    const handleClick = () => {
      setActive(!active);
    };
  

  // fetch the data
  useEffect(() => {
    // set loading to true

    const url = `http://localhost:3000/?city=${location}`;

    axios
      .get(url)
      .then((res) => {
        
         setData(res.data) 
          console.log(data);
          
        
      })
     
  }, [location]);

  
 return(
<div className={active ? "body" : "Body"}>
  <div className={active ? "App" : "app"} >
    <button onClick={handleClick} className='light'>🔦</button>
    { !data ? (
  <h1 style={{ fontFamily: 'cursive' }}>"NO Data Found"</h1>

) : (
  <>
    <div className='container'>
      <input type='text' placeholder='Enter city' className='search' onChange={handleInput}></input>
      <button className='search' value={inputValue} onClick={handleSubmit}>🔍</button>
    </div>
    <div>
      <h1 className='description'> {data.weather[0].description} </h1>
      <h1 className='temp'>{data.main.temp}°C</h1>
      <p className='city'>{data.name}</p>
    </div>
    <div className='des'>
      <div className='de'>
      <h1 className='hum'>{data.main.humidity}%</h1>
      <h1 className='humidty'>Humidty</h1>
      </div>
      <div className='de'>
      <h1 className='km'>{data.wind.speed}km/h</h1>
      <h1 className='wind'>Wind</h1>
      </div>
     
    </div>
    </>
 )
}
  </div>
  <p>made with ❤️ By <a href='https://krishnampurwar.netlify.app/'></a> Krishnam Purwar</p>
  </div>
 )
}

export default App;
