import { getBarModels, delay } from "../Helpers";

export async function quickSort(size, values, setBars ) {
    await quickSortRecursive(0, size - 1, values, setBars);
}


async function quickSortRecursive(start, end, values, setBars) {
    if (start >= end) {
        return;
    }

    let index = await quickSortPartition(start, end, values, setBars);

    await quickSortRecursive(start, index - 1, values, setBars);
    await quickSortRecursive(index + 1, end, values, setBars);
}

async function quickSortPartition(start, end, values, setBars) {
    const pivotValue = values[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if(values[i] < pivotValue) {
        [values[i], values[pivotIndex]] = [values[pivotIndex], values[i]];
        pivotIndex++;
        if(values[i] !== values[pivotIndex]) {
          setBars(getBarModels(values));
          await delay(1);
        }
      }
    }

    [values[pivotIndex], values[end]] = [values[end], values[pivotIndex]];
    if(values[pivotIndex] !== values[end]){
      setBars(getBarModels(values));
    }
    
    return pivotIndex;
  }