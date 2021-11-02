const ul = document.querySelector('.frameworks');
const frameworks = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'JQuery'];
const card = document.querySelector('.card__inner');

let html = ``;

//conversion to =>
frameworks.forEach(skills =>{
  
//Create html Template
  html += `<li style= "color: #ffffff">${skills}</li>`;
})

ul.innerHTML = html;


card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});




