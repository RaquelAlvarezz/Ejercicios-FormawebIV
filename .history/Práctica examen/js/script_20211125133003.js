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
            
                   <li><a href="../Prácticaexamen/index.html" class="nav-link" data-text="Home">Inicio</a></li>
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
