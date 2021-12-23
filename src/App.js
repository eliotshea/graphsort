import './App.css';
import Bar from './Bar';
import { useState, useEffect } from 'react';
import { bubbleSort }  from './algorithms/BubbleSort';
import { quickSort } from './algorithms/QuickSort';
import { getBarModels, getValues, Algorithms } from './Helpers';
import { insertionSort } from './algorithms/InsertionSort';
import { selectionSort } from './algorithms/SelectionSort';

var sorting = false;
var values = [];

const defaultSize = 50;

function App() {
  const [sorting, setSorting] = useState(false);
  const [algorithm, setSortFunction] = useState(0);
  const [barModels, setBars] = useState(getBarModels(values)) ;
  const [size, setSize] = useState(defaultSize);
  
  useEffect(() => {
    values = getValues(size);
    setBars(getBarModels(values));
  }, [size]);
  
  async function sort() {
    setBars(getBarModels(values));

    if(sorting === false){
      switch (algorithm) {
        case Algorithms.BubbleSort:
          setSorting(true);
          bubbleSort(values, setBars).then(() => setSorting(false));
          break;
        case Algorithms.QuickSort:
          setSorting(true);
          quickSort(size, values, setBars).then(() => setSorting(false));
          break;
        case Algorithms.InsertionSort:
          setSorting(true);
          insertionSort(values, setBars).then(() => setSorting(false));
          break;
        case Algorithms.SelectionSort:
          setSorting(true);
          selectionSort(values, setBars).then(() => setSorting(false));
          break;
        default:
          break;
      }
    }
    
  }

  function changeSort(event) {
    if(!sorting) {
      setSortFunction(parseInt(event.target.value));
      values = getValues(size);
      setBars(getBarModels(values));
    }
  }

  function handleResize(event) {
    if(!sorting) {
      setSize(parseInt(event.target.value));
    }
  }

  function handleRefresh() {
    if(!sorting) {
      console.log("refreshed")
      values = getValues(size);
      setBars(getBarModels(values));
    }
  }

  return (
    <div className="App">
      <h1>
        <select name="algorithm" onChange={changeSort}>
          <option value={Algorithms.BubbleSort}>Bubble Sort</option>
          <option value={Algorithms.QuickSort}>Quick Sort</option>
          <option value={Algorithms.InsertionSort}>Insertion Sort</option>
          <option value={Algorithms.SelectionSort}>Selection Sort</option>
        </select>
        <span>
          Visualization 
        </span>
      </h1>
      <div className='Container'>
        <div className="Buttons">
          <input type="button" value="Refresh" onClick={handleRefresh}/>
          <input type="button" value="Sort" onClick={sort}/>
        </div>
        
        <div className="Graph">
          {barModels.map((x, index) => 
            <Bar key={index} height={x.height} width={x.width} color={x.color}></Bar>
          )}
        </div>
      </div>
      <label>{size}</label>
      <input type="range" min="20" max="200" value={size} onChange={handleResize}/>
    </div>
  );
}

export default App;
