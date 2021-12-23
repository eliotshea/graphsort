import './App.css';
import Bar from './Bar';
import { useState } from 'react';

function getValues() {
  const values = []
  for(let i = 0; i < 50; i++) {
    values.push(Math.floor(Math.random() * 100));
  }
  return values;
}

function getBarModels(values) {
  return values.map(value => {
    return {
      width: 1,
      height: value * 5,
      color: "green"
    }
  });
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function App() {
  var values = getValues();
  const [barModels, setBars] = useState(getBarModels(values))
  
  const barComponents = barModels.map(x => 
    <Bar height={x.height} width={x.width} color={x.color}></Bar>
  );
  
  async function startSort() {
    for(var i = 0; i < values.length; i++) {
      for(var j = 0; j < values.length - 1; j++) {
        if(values[j] > values[j+1]) {
          let temp = values[j];
          values[j] = values[j+1];
          values[j+1] = temp;
          setBars(getBarModels(values));
          await delay(1);
        }
      }
    }
  }

  return (
    <div className="App">
      <div className="Buttons">
        <input type="button" value="Refresh" onClick={() => {
          values = getValues();
          setBars(getBarModels(values));
        }}/>
        <input type="button" value="Sort" onClick={() => startSort()}/>
      </div>
      
      <div className="Graph">
        {barComponents}
      </div>
    </div>
  );
}

export default App;
