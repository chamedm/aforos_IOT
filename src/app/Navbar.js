import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink} from 'react-router-dom';

import './Navbar.style.css';


async function logOutUser() {
  const tokenString = localStorage.getItem("token");
  console.log(tokenString);
  return fetch(
    "https://server2-excellent-dog-jq.mybluemix.net/api/auth/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: tokenString,
    }
  ).then((data) =>{ 
    console.log(data);
    if(data.status === 200){
      localStorage.removeItem("token");
      document.location.reload();
    }
    return data.json()});
}


function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar">
      <p className="navbar__title">Aforos ITESO</p>
      <div className="navbar__actions">
        <button>Dashboard</button>
        <button>Configuracion</button>
        <button onClick={handleClick}>
            Cuenta
        </button>
      </div>
      <Menu
        id="simple-menu" anchorEl={anchorEl}
        keepMounted open={Boolean(anchorEl)}
        onClose={handleClose}>
          <MenuItem onClick={logOutUser}>
            <NavLink to='/' exact >Cerrar sesión</NavLink>
          </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;