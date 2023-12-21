import myName from './myName';
import './style.css';
function component() {
    const element = document.createElement('div');
  
    // use the imported myName function
    element.innerText = myName('Ndzi Nfor');
    element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());