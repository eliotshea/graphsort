import { getBarModels, delay } from "../Helpers";

export async function selectionSort(values, setBars){
    var minIdx, temp, 
    len = values.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(values[j]<values[minIdx]){
            minIdx = j;
         }
      }
      temp = values[i];
      values[i] = values[minIdx];
      values[minIdx] = temp;
      setBars(getBarModels(values))
      await delay(1);
    }
    return values;
  }
          