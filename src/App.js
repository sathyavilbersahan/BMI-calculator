import { useState } from 'react'
import './App.css'

function App() {
  const [height,setheight]=useState("");
  const [Weight,setWeight]=useState("");
  const [BMI,setbmi]=useState(null);
  const [bmistatus,setbmistatus]=useState("");
  const [errorMessage,seterrorMessage]=useState("")

  const calculateBmi=()=>{
    const isValidHeight=/^\d+$/.test(height);   //  \d is used for digit expression only 
    const isValidWeight=/^\d+$/.test(Weight);
    
    if(isValidHeight && isValidWeight){
      const heightInMeters=height/100;
      const bmivalue= Weight/(heightInMeters*heightInMeters)
      setbmi(bmivalue.toFixed(2))
      if(bmistatus < 18.5)
      {
        setbmistatus("Under Weight");
      }else if(bmivalue >=18.5 && bmivalue < 24.9){
         setbmistatus("Normal Weignt");
      }else if(bmivalue >= 15 && bmivalue <29.9)
      setbmistatus("Over Weight");
        else{
          setbmistatus("obeses");
      }
    seterrorMessage("");
    }
    else
    {
      setbmi(null);
      setbmistatus("");
      seterrorMessage("please enter the valid Height & Weight")
    }
  };
function clearAll()
{
  setheight("");
  setWeight("");
  setbmi(null);
  setbmistatus("");
}
  return (
    <>
     <div className="bmi-calculator">
     <div className="box"></div>
     <div className="data">
     <h1>BMI CALCULATOR</h1>
     <p className="error">{errorMessage}</p>
     <div className="input-container">
     <label>Height (CM)</label>
     <input type="text" value={height} id="height" height onChange={(e)=>setheight(e.target.value)} ></input>
     </div>
     <div className="input-container">
     <label>Weight (KG)</label>
     <input type="text" value={Weight}id="weight" onChange={(e)=>setWeight(e.target.value)}></input>
     </div>
     <button onClick={calculateBmi}>Calculate BMI</button>
     <button onClick={clearAll}>clear</button>
     {BMI !== null && (
     <div className="result">
        <p>Your BMI: {BMI}</p>
        <p>Status:{bmistatus}</p>
     </div>
     )}
     </div>
     </div>
    </>
  )
}

export default App