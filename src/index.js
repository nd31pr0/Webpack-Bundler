import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    // use the imported myName function
    element.innerText = myName('Ndzi Nfor');
    element.classList.add('hello');
    

    //add icon img to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());