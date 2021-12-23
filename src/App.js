import logo from './logo.svg';
import './App.css';
import Bar from './Bar';
import { useEffect, useState } from 'react';

function getValues() {
  const values = []
  for(let i = 0; i < 50; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  return values;
}

function getBars(values) {
  return values.map(x => {
    return {
      width: 10,
      height: x * 5,
      color: "green"
    }
  });
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function App() {
  var values = getValues();
  //const [values , setValues] = useState(getValues())
  const [bars, setBars] = useState(getBars(values))
  
  const barComponents = bars.map(x => 
    <Bar height={x.height} width={x.width} color={x.color}></Bar>
  );
  
 // useEffect(() => {setBars(getBars(values))}, [values])
  async function startSort() {
    for(var i = 0; i < values.length; i++) {
      for(var j = 0; j < values.length - 1; j++) {
        if(values[j] > values[j+1]) {
          let temp = values[j];
          values[j] = values[j+1];
          values[j+1] = temp;
          setBars(getBars(values));
          await delay(1);
        }
      }
    }

    // let x = 0;
    // let interval = setInterval(() => {
    //   values[x] = 100;
      
    //   x += 1;
    //   setBars(getBars(values));
    //   if(x == values.length) {
    //     clearInterval(interval);
    //   }
    // }, 100)


    
  }

  return (
    <div className="App">
      <input type="button" value="Refresh" onClick={() => {
        values = getValues();
        setBars(getBars(values));
      }}/>
        <input type="button" value="Sort" onClick={() => startSort()}/>
      <div className="Graph">
        {barComponents}
      </div>
    </div>
  );
}

export default App;
