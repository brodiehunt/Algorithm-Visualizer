function selectionSort() {
  for (let i = 0; i < arraySize; i++) {
    let min = i;
    for (let j = i + 1; j < arraySize; j++) {
      if (divsHeight[j] < divsHeight[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = divsHeight[i];
      divsHeight[i] = divsHeight[min];
      divsHeight[min] = temp;
      transformDiv(divsArray[i], divsHeight[i]);
      transformDiv(divsArray[min], divsHeight[min]);
    }
  }
}


