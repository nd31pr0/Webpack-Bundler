import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // use the imported myName function
    element.innerText = myName('Ndzi Nfor');
  
    return element;
  }
  
  document.body.appendChild(component());