import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class Libera extends React.Component {
    state = { 
      
     } 
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark h-10">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="/images/navlogo.webp"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse nav-item" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link text-white" aria-current="page" href="#">FAQ's</a>
                  <a class="nav-link text-white" href="#">Telegra</a>
                  <a class="nav-link text-white" href="#">Twitter</a>
                  <a class="nav-link text-white" href="#">BUSD 3X Miner</a>
                  <a class="nav-link text-white" href="#">Lambp Contect</a>
                  <a class="nav-link text-white" href="#">Liberator Bank</a>
                  <button>Open app <img src="/images/minilogo.png"/></button>
                  
                </div>
              </div>
            </div>
          </nav>
        );
    }
}
 
export default Libera;