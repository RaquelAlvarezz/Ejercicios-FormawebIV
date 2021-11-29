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

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}
customElements.define('header-component', Header);
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



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



var checkbox = document.getElementById('checkbox')
var i = 0
checkbox.addEventListener('click', () => {
	var fundo = document.querySelector("body")
    var overlay = document.querySelector(".overlay")
    var btn = document.querySelector(".btn")
    var btn2 = document.querySelector(".btnCadastro2")
    var btn3 = document.querySelector(".btnLogin2")
    var tituloForm1 = document.querySelector(".tituloForm1")
    var tituloForm2 = document.querySelector(".tituloForm2")
    var icone1 = document.querySelector(".icone1")
    var icone2 = document.querySelector(".icone2")
    var icone3 = document.querySelector(".icone3")
    var icone4 = document.querySelector(".icone4")
    var icone5 = document.querySelector(".icone5")
    var icone6 = document.querySelector(".icone6")
    var esqueciSenha = document.querySelector(".esqueciSenha")
    
	
	
	if(i<=0){
		fundo.style.backgroundColor ="#001017"
        overlay.style.backgroundColor ="#28030A"
        btn.style.backgroundColor ="#28030A"
        btn2.style.color="#28030A"
        btn3.style.color="#28030A"
        tituloForm1.style.color ="#28030A"
        tituloForm2.style.color ="#28030A"
        icone1.style.color="#28030A"
        icone1.style.borderColor="#28030A"
        icone2.style.color="#28030A"
        icone2.style.borderColor="#28030A"
        icone3.style.color="#28030A"
        icone3.style.borderColor="#28030A"
        icone4.style.color="#28030A"
        icone4.style.borderColor="#28030A"
        icone5.style.color="#28030A"
        icone5.style.borderColor="#28030A"
        icone6.style.color="#28030A"
        icone6.style.borderColor="#28030A"
        esqueciSenha.style.color ="#28030A"
        
	}
	i++
	if(i>=2){
		fundo.style.backgroundColor="white"
        overlay.style.backgroundColor="#ffbf00"
        btn.style.backgroundColor ="#ffbf00"
        btn2.style.color ="#ffbf00"
        btn3.style.color ="#ffbf00"
        tituloForm1.style.color ="#ffbf00"
        tituloForm2.style.color ="#ffbf00"
        icone1.style.color ="#ffbf00"
        icone1.style.borderColor ="#ffbf00"
        icone2.style.color ="#ffbf00"
        icone2.style.borderColor ="#ffbf00"
        icone3.style.color ="#ffbf00"
        icone3.style.borderColor ="#ffbf00"
        icone4.style.borderColor ="#ffbf00"
        icone5.style.color ="#ffbf00"
        icone5.style.borderColor ="#ffbf00"
        icone6.style.color ="#ffbf00"
        icone6.style.borderColor ="#ffbf00"
        esqueciSenha.style.color ="#ffbf00"
        

		i=0
	}
});