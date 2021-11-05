function loaded() {
  alert("Welcome! Feel free to contact me. Have a blessed day!");
}

const ul = document.querySelector('.frameworks');
const frameworks = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'JQuery'];

let html = ``;

//conversion to =>
frameworks.forEach(skills =>{
  
//Create html Template
  html += `<li style= "color: #ffffff">${skills}</li>`;
})

ul.innerHTML = html;