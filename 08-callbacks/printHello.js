const printHello = (message) => {
  console.log("hello!");
}

// setTimeout(printHello, 3000);

const executeAfterDelay = (delay, functionName) => {
  setTimeout(functionName, delay * 1000);
};

executeAfterDelay(5, printHello);