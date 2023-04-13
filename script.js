const result = Array.from(document.querySelectorAll('.category-list li'))
.map(e => e.innerText);

console.log(result);

//const sliderText = document.querySelector('.slider-text');
//sliderText.textContent = 'This is a new text content.';
//sliderText.style.animationPlayState = 'paused';              //code for sliding text 
//sliderText.style.animationPlayState = 'running';
//sliderText.style.animationDuration = '5s';
