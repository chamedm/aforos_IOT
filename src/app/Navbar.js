import React from 'react';
import './Navbar.style.css';

function Navbar(){
  return(
    <div className='navbar'>
      <p className='navbar__title'>Aforos ITESO</p>
      <div className='navbar__actions'>
        <button>
          Dashboard
        </button>
        <button>
          Configuracion
        </button>
        <button>
          Cuenta
        </button>
      </div>
    </div>
  )
}

export default Navbar;