import React from 'react'
import { useState } from 'react'
import axios from "axios"

export default function Weather() {
let[data,setData]=useState({
      celcius:10,
      name:'London',
      humidity:10,
      speed:2,
      image:'/Images/clouds.png'
    })
   let [name,setName]=useState('');
  let [error,setError]=useState('');

  let click =()=>{      
    if(name !== ''){
      let api= `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3dd6b0a67681bcd151f68127a5e338e6&units=metric`
    axios.get(api).then((res) =>{
      let WeatherMain = res.data.weather[0].main.toLowerCase();
      let imagePath = '';
      if( WeatherMain ==="clouds"){
        imagePath = "/Images/clouds.png"
      }
      else if( WeatherMain ==="clear"){
        imagePath ="/Images/clear.png"
      }
      else if( WeatherMain ==="Rain"){
        imagePath ="/Images/Rain.png"
      }
      else if( WeatherMain ==="drizzle"){
        imagePath ="/Images/drizzle.png"
      }
      else if( WeatherMain ==="mint"){
        imagePath ="/Images/mint.png"
      }
      else if( WeatherMain ==="snow"){
        imagePath= "/Images/snow.png"
      }
      else{
        imagePath='/Images/clouds.png'
      }
      setData({...data,celcius: res.data.main.temp, name:res.data.name,humidity:res.data.main.humidity, speed:res.data.wind.speed, image:imagePath})
      setError('');
    })
    
    .catch(err =>{
      if(err.response.status === 404){
        setError("Invalid city Name")
      }
      else{
        setError('')
      }
      console.log(err)

    })
    }
  }

  return (
<div className='App'>
         <div style={{ textAlign:"center"}}>
          <h1>WeatherAPP</h1>
          </div>
      <div className='weather' >
        <div className='search'>
            <input type="text" placeholder='Enter the city Name' onChange={(e) =>setName(e.target.value)} />
             <button><img src="/Images/search.png" onClick={click} alt="" /></button>
        </div>
        <div>
          <p>{error}</p>
        </div>
      <div className="cloud">
        <img src={data.image} alt="" />
        <h1>{Math.round(data.celcius)}°c</h1>
        <h2>{data.name}</h2>
        <div className="details">
          <div className="col">
             <img src="/Images/humidity.png" alt="" />
             <div className='humidity'>
              <p>{Math.round(data.humidity)}%</p>
              <p>Humidity</p>
             </div>
          </div>          
          <div className="col">
            <img src="/Images/wind.png" alt="" />
            <div className='wind'>
              <p>{Math.round(data.speed)}km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>

      </div>


      </div>

      
      </div>

  )
}



// let click =()=>{      
//   if(name !== ''){
//     let api= `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3dd6b0a67681bcd151f68127a5e338e6&units=metric`
//   axios.get(api).then(res =>{
//     let imagePath = '';
//     if(res.data.weather[0].main =="clouds"){
//       imagePath = "/Images/clouds.png"
//     }
//     else if(res.data.weather[0].main =="clear"){
//       imagePath ="/Images/clear.png"
//     }
//     else if(res.data.weather[0].main =="Rain"){
//       imagePath ="/Images/Rain.png"
//     }
//     else if(res.data.weather[0].main =="drizzle"){
//       imagePath ="/Images/drizzle.png"
//     }
//     else if(res.data.weather[0].main =="mint"){
//       imagePath ="/Images/mint.png"
//     }
//     else if(res.data.weather[0].main =="snow"){
//       imagePath= "/Images/snow.png"
//     }
//     else{
//       imagePath='/Images/clouds.png'
//     }
//     setData({...data,celcius: res.data.main.temp, name:res.data.name,humidity:res.data.main.humidity, speed:res.data.wind.speed, image:imagePath})
//     setError('');
//   })
