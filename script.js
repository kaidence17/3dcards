// scripts

console.log('ok!'); 

document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {
      item.classList.toggle('flipped');}