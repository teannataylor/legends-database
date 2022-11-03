import {
    NavLink
  } from "react-router-dom";
function NavBar(){

    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'red',
        textDecoration: 'none',
        color: 'white',
      }

      
    return (
        <div>
            <h1>Apex Legends Homepage</h1>
            <NavLink to="/legends" style={link} exact activeStyle={{background: 'darkred'}}>All Legends</NavLink>
            <NavLink to="/legends/new" style={link} exact activeStyle={{background: 'darkred'}}>New Legend</NavLink>
            <NavLink to="/" style={link} exact activeStyle={{background: 'darkred'}}>Home</NavLink>
        </div>
    )
}

export default NavBar