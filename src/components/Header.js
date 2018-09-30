import React from 'react';
import {NavLink} from  'react-router-dom';

const Header=()=>(
    <header>
    <h1>Expensify</h1>
    
    <NavLink to="/" activeClassName="is-active" exact={true}>GO home</NavLink><br/>
    <NavLink to="/create" activeClassName="is-active">Create_page</NavLink><br/>
    <NavLink to="/edit" activeClassName="is-active">Edit_Page</NavLink><br/>
    <NavLink to="/help" activeClassName="is-active">help</NavLink><br/>
    
    </header>
);

export default Header;