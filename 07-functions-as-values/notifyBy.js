const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to: ${number}`;
}

const notify = (string, functionName) => {
  return functionName(string);
}

notify('hello@makers.tech.test', notifyByEmail);
notify('+10000000000', notifyByText);