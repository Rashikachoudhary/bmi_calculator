import React from 'react'
import { useState } from 'react';
import './App.css';
const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
    
  const calculateBMI = () => {
    if (!height || !weight){
      setResult("Please Enter Height and Weight");
    }
;
    
    

    const heightInMetres = height / 100;
    const bmi = (weight / (heightInMetres * heightInMetres)).toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "underweight";
    else if(bmi <25)  category= "NormalWeight";
    else if (bmi < 30) category= "OverWeight";
    else category = "obese";

    setResult(`BMI is ${bmi} :  ${category}`);
  }



  return (
    <div>
      <div className="container1">
        <h2><strong> BMI Calculator</strong></h2>
        {/*height */}
        <br></br>
        <label htmlFor="height"> Height(in cm)</label>
        <input 
        type="number" 
        id="height" 
        placeholder="e.g. 168" 
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        />
        <br></br>
         {/*weight */}
        <label htmlFor='weight'> Weight (in kg) </label>
        <input 
        type="number" 
        id= "weight" 
        placeholder="e.g. 64"
        value={weight}
        
        onChange={(e) => setWeight(e.target.value)}
        />
      
        {/* Button */}
        <button onClick = {calculateBMI}> Calculate  BMI</button>
      
        {/* Result */}
        <div className="result">{result}</div>
      </div>
    </div>
  )
}

export default App