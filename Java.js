const ul = document.querySelector('.frameworks');
const frameworks = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'JQuery'];

let html = ``;

//conversion to =>
frameworks.forEach(skills =>{
  
//Create html Template
  html += `<li style= "color: #ffffff">${skills}</li>`;
})

ul.innerHTML = html;