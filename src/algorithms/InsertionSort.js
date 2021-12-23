import { getBarModels, delay } from "../Helpers";

export async function insertionSort(values, setBars){
    var i, len = values.length, el, j;
  
    for(i = 1; i<len; i++){
      el = values[i];
      j = i;
  
      while(j>0 && values[j-1]>el){
        values[j] = values[j-1];
        j--;
        setBars(getBarModels(values));
        await delay(1);
     }
  
     values[j] = el;
    }
  
    return values;
}