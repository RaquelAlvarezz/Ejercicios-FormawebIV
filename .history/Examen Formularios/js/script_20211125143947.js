const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 90px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <div class="container">
       <div class="nav-wrapper">
           <div class="hamburger-menu">
               <div class="line line-1"></div>
               <div class="line line-2"></div>
               <div class="line line-3"></div>
           </div>
       <nav class="top-nav">
            <ul class="nav-list">
            
                   <li><a href="../Práctica examen/index.html" class="nav-link" data-text="Home">Inicio</a></li>
                   <li><a href="../Equipo/index.html" class="nav-link" data-text="About Us">Sobre nosotros</a></li>
                   <li><a href="#" class="nav-link" data-text="Services">Servicios</a></li>
                   <li><a href="#" class="nav-link" data-text="Contact">Contacto</a></li>
             </ul>
          </nav>
       </div>
   </div>
`;

const form = document.getElementById('form');

const username = document.querySelector("[name='username']");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const passwordCheck = document.querySelector("[name='password check']");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue =  passwordCheck.value.trim();
  
  if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setExitoFor(username);
  }
  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(isEmail(email) != true) {
    setErrorFor(email, 'Not a valid email');
  }else {
    setExitoFor(email);
  }  
  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setExitoFor(password);
  }
  if(passwordCheckValue === '') {
    setErrorFor(passwordCheck, 'Password cannot be blank');
  } else if(passwordCheckValue != passwordValue) {
    setErrorFor(passwordCheck, 'Password does not match');
  } else {
    setExitoFor(passwordCheck);
  }  
};

function setErrorFor(input, message) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector('small');
  
  small.innerText = message;
  
  inputBox.className = 'input-box error';
};

function setExitoFor(input) {
  const inputBox = input.parentElement; 
  inputBox.className = 'input-box exito';  
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}