!function(e){var r={};function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(i,n,function(r){return e[r]}.bind(null,n));return i},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){},function(e,r,t){"use strict";t.r(r);t(0);const i=document.querySelectorAll("[data-number]"),n=document.querySelectorAll("[data-operator]"),a=document.querySelector("[data-equal]"),s=document.querySelector("[data-clear]"),l=document.querySelector("[data-float]"),u=document.querySelector("[data-display-previous]"),c=document.querySelector("[data-display-current]"),o=new class{constructor(e,r){this.prevDisplay=e,this.currDisplay=r,this.valueArray=[]}getValues(e){"0"===this.currDisplay.innerText||"Invalid expression"===this.currDisplay.innerText?this.currDisplay.innerText=e:this.currDisplay.innerText+=e}getFloatValues(){this.currDisplay.innerText.includes(".")||(this.currDisplay.innerText+=".")}getOperator(e){"Invalid expression"===this.currDisplay.innerText&&(this.currDisplay.innerText="0"),2===this.valueArray.length&&this.currDisplay.innerText&&this.equal(),this.valueArray.push(this.currDisplay.innerText,e),this.prevDisplay.innerText=this.valueArray.join(" "),this.currDisplay.innerText=""}equal(){const e=parseFloat(this.valueArray[0]),r=parseFloat(this.currDisplay.innerText);switch(this.valueArray[1]){case"+":this.currDisplay.innerText=e+r;break;case"-":this.currDisplay.innerText=e-r;break;case"x":this.currDisplay.innerText=e*r;break;case"÷":this.currDisplay.innerText=e/r}this.valueArray.length>2||!isFinite(this.currDisplay.innerText)?this.currDisplay.innerText="Invalid expression":parseFloat(this.currDisplay.innerText)%1!=0&&(this.currDisplay.innerText=parseFloat(this.currDisplay.innerText).toFixed(3)),this.valueArray.length=0,this.prevDisplay.innerText=""}clear(){this.prevDisplay.innerText="",this.currDisplay.innerText="0",this.valueArray.length=0}updateDisplay(){this.currDisplay.style.fontSize="",this.currDisplay.innerText.length>7&&(this.currDisplay.style.fontSize="40px"),this.currDisplay.innerText.length>11&&(this.currDisplay.style.fontSize="30px")}}(u,c);i.forEach(e=>{e.addEventListener("click",()=>{o.getValues(e.innerText),o.updateDisplay()})}),n.forEach(e=>{e.addEventListener("click",()=>{o.getOperator(e.innerText),o.updateDisplay()})}),a.addEventListener("click",()=>{o.equal(),o.updateDisplay()}),s.addEventListener("click",()=>{o.clear(),o.updateDisplay()}),l.addEventListener("click",()=>{o.getFloatValues(),o.updateDisplay()})}]);