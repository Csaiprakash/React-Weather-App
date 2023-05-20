import React,{useState} from 'react'
import './App.css'
const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Weather App</h1>
            <form onSubmit={submitHandler}>
              <input className="input" type="text" name="city" onChange={changeHandler} value={city} placeholder="Enter City name"/> <br /><br />
              <input className='submit' type="submit" value="Get Temperature" />
            </form><br /> <br />
            <div>
               <h1 className="result">{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App