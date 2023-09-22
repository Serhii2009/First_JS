let message = prompt('Color?');
let action;

if (message) {
  message = message.toLowerCase();
}

switch (message) {
  case 'red':
    action = 'stop';
    break;
  case 'yellow':
    action = 'ready';
    break;
  case 'green':
    action = 'go';
    break;
  default:
    action = 'be careful';
}
console.log(action);
