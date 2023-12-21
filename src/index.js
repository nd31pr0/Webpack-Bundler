import myName from './myName';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
  
    // use the imported myName function
    element.innerText = myName('Ndzi Nfor');
    element.classList.add('hello');
    return element;

    //add icon img to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
  }
  
  document.body.appendChild(component());