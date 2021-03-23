const bubbleSort = () => {
  let swapped;
  do {
    swapped = false
    for (let i = 0; i < arraySize; i++) {
      if (divsHeight[i] > divsHeight[i + 1]) {
        let tempVar = divsHeight[i];
        divsHeight[i] = divsHeight[i + 1]
        divsHeight[i + 1] = tempVar;
        transformDiv(divsArray[i], divsHeight[i]);
        transformDiv(divsArray[i+1], divsHeight[i+1]);
        swapped = true;
        
      }
    }
  } while (swapped == true)
  
}





