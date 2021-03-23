const insertionSort = () => {
  for (let i = 1; i < divsHeight.length; i++) {
    let currentVal = divsHeight[i]
    let x = i - 1;
    while ((x >= 0) && (currentVal < divsHeight[x])) {
      divsHeight[x + 1] = divsHeight[x];
      transformDiv(divsArray[x+1], divsHeight[x+1]);
      x--;
    }
    divsHeight[x + 1] = currentVal;
    transformDiv(divsArray[x+1], divsHeight[x+1])
  }
}
