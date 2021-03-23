var arraySize = 50,
    timeAdd = 0,
    timeDelay = 25;
    divWidthAsPercentage = 100 / arraySize,
    divsHeight = [],
    divsArray = [],
    currentAlgorithm = 'Bubble Sort',
    algoContainer = document.querySelector(".div-box-container"),
    runButton = document.getElementById('run'),
    algSizeMenu = document.querySelector(".container-size"),
    algSpeedMenu = document.querySelector(".speed"),
    algTypeMenu = document.querySelector(".algorithm-setting")




function createArray(){
  algoContainer.innerHTML = "";

  for (let i = 0, randomHeight; i < arraySize; i++ ) {
    randomHeight = Math.floor(Math.random() * 100 * 0.8) + 20;
    let div = document.createElement('div');
    div.className = 'divBar';
    div.style.height = `${randomHeight}%`;
    div.style.width = `${divWidthAsPercentage}%`;
    divsArray[i] = div;
    divsHeight[i] = randomHeight;
    algoContainer.appendChild(div);
  }
}

function transformDiv(div, divHeight) {
  window.setTimeout(() => {
    div.style= "width:" + divWidthAsPercentage + "%; height:" + divHeight + "%;";
  }, timeAdd+=timeDelay)

}

function runAlgorithm() {
  timeAdd = 0;
  createArray();
  console.log(currentAlgorithm)
  switch (currentAlgorithm) {
    case 'Bubble Sort':
      bubbleSort()
      break;
    case 'Selection Sort':
      selectionSort();
      break;
    case 'Insertion Sort':
      insertionSort();
      break;
    default:
      console.log("no algorithm for this case")
  }
  
}


document.querySelectorAll('.menu-item').forEach((item) => {
  item.addEventListener('click', (event) => {
    switch (event.target.id) {
      case "algorithm-setting":
        algTypeMenu.innerHTML = event.target.innerHTML;
        currentAlgorithm = event.target.innerHTML;
        break;
      case "container-size":
        algSizeMenu.innerHTML = event.target.innerHTML;
        if (event.target.classList.contains('50-bars')) {
          arraySize = 50;
        } else if (event.target.classList.contains('100-bars')) {
          arraySize = 100;
        } else {
          arraySize = 200;
        }
        break;
      case "speed":
        algSpeedMenu.innerHTML = event.target.innerHTML;
        if (event.target.classList.contains('slow')) {
          timeDelay = 30;
        } else if (event.target.classList.contains('medium')) {
          timeDelay = 20;
        } else {
          timeDelay = 10;
        }
        break;
      default:
        console.log("Case statement has no match");
    }
    // if (event.target.id === "algorithm-setting") {
    //   algTypeMenu.innerHTML = event.target.innerHTML;
    // } else if (event.target.id === 'speed') {

    // } else if (event.target.id === 'container-size') {

    // } 
  } );
})

runButton.addEventListener('click', runAlgorithm);