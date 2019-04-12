// import print from './print.js';
// import {math} from './comm.js';


import a from './a.js';
import b from './b.js';

function print(){
  console.log('self print');
}
const num = 10;
console.log(comm(num));
// console.log(math.square(num));
// console.log(math.cube(num));

import './main.scss';

function component(){
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = 'hello webpack';
  btn.innerHTML = 'print';
  btn.onclick = print;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

console.log(JSON.stringify(process));
if(process.env.NODE_ENV !== 'production'){
  console.log('looks like we are in development mode!');
}

console.log(module.hot);
if(module.hot){
  module.hot.accept('./print.js', function(){
    console.log('accept print.js');
    print();
  })
}