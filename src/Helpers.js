export const Algorithms = {
    BubbleSort: 0,
    QuickSort: 1,
}

export function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function getValues(size) {
    const values = []
    for(let i = 0; i < size; i++) {
      values.push(Math.floor(Math.random() * 100));
    }

    return values;
}

export function getBarModels(values) {
    return values.map(value => {
      return {
        width: 1,
        height: value * 5,
        color: "green"
      }
    });
}

