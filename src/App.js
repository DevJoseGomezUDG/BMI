import React, { useState } from "react";

export default function App() {
  const [_HEIGHT, setHeight] = useState(0);
  const [_MASS, setMass] = useState(0);
  const [_BMI, setBmi] = useState(0);
  const [_RESULT, setResult] = useState('');
  let inputType = "number"
  const labels = { height: 'height (meters)', mass: 'mass (kg)'}
  const valuesHeight = { min: 1, max: 2.50, step: 0.01 }

  const categories = 
  [
    'Delgadez severa',
    'Delgadez moderada',
    'Delgadez aceptable',
    'Peso normal',
    'Sobrepeso',
    'Obesidad leve (Tipo I)',
    'Obesidad media (Tipo II)',
    'Obesidad mórbida (Tipo III)'
  ]


  const calculate = (e) => {
    e.preventDefault();
    const formValid = +_HEIGHT > 0 && +_MASS > 0;
    if (!formValid) {
      return;
    }
    const _BMI = +_MASS / ( +_HEIGHT ) ** 2;
    setBmi(parseFloat(_BMI).toFixed(2));
    
    if(_BMI < 16) setResult(categories[0])
    if(_BMI >=16 && _BMI <17) setResult(categories[1])
    if(_BMI >=17 && _BMI <=18.5) setResult(categories[2])
    if(_BMI > 18.5 && _BMI <=25) setResult(categories[3])
    if(_BMI > 25 && _BMI <=30) setResult(categories[4])
    if(_BMI > 30 && _BMI <=35) setResult(categories[5])
    if(_BMI > 35 && _BMI <=40) setResult(categories[6])
    if(_BMI > 40) setResult(categories[7])
  }


  return (
    <div className="App" id="box">
      <form onSubmit={calculate}>
        <>
          <label>{ labels.height.toUpperCase() }</label> <br />
          <input type={ inputType } min={ valuesHeight.min } max={ valuesHeight.max } step={ valuesHeight.step } value={ _HEIGHT } onChange={(e) => setHeight( e.target.value )} />
        </> <br />
        <>
          <label>{ labels.mass.toUpperCase() }</label> <br />
          <input type={ inputType } value={ _MASS } onChange={(e) => setMass( e.target.value )} />
        </> <br />
        <button type="submit">CALCULATE BMI</button>
      </form>
      <p>{`Your BMI is ${ _BMI }: ${ _RESULT }`}</p>
    </div>
  );
}