import React, { useEffect, useState } from 'react';
import "./App.css";

const App = () => {
  const [principale, setPrincipale] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === 'principale') {
      setPrincipale(value);
    } else if (id === 'interest') {
      setInterest(value);
    } else {
      setYears(value);
    }
  }

  const calculate = () => {
    let r = interest;
    if (principale && r && years) {
      r = r / 12 / 100; // per month
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = principale * ((r * calcPow) / (calcPow - 1));
      setEmi(Math.round(amount));
    }
  }

  useEffect(() => {
    calculate();
  }, [principale, interest, years]);

  return (
    <div className='loan-calc'>
      <h1>Mortgage calculator</h1>
      <div className="inputs">
        <p>Principal :</p>
        <input type="number" id="principale" onChange={handleChange} />
        <p>Interest :</p>
        <input type="number" id="interest" onChange={handleChange} />
        <p>Years :</p>
        <input type="number" id="years" onChange={handleChange} />
      </div>
      <div className='output'>
       Your EMI IS {emi}
      </div>
    </div>
  );
}

export default App;
