import comm from './comm';
import jQuery from 'jquery';

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


// jQuery('body').text('a.js');
console.log(jQuery('body').text());
console.log(comm(10));
