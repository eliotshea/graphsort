import { getBarModels, delay } from '../Helpers';

export async function bubbleSort(values, setBars) {
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

  export default bubbleSort;