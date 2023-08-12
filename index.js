// Write your code here!

const element = document.querySelector('main#main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "bouchra-ikram is the champion"; // Replace 'YOUR-NAME' with the actual name

document.body.appendChild(newHeader);

