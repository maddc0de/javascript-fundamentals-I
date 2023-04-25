const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

const transform = (message, functionName) => {
  return functionName(message); 
}

transform('WHY ARE YOU SHOUTING', lowercaseMessage);