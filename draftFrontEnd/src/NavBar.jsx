import React from 'react'
import { NavLink } from "react-router-dom"

export function NavBar() {
    return (
        <>
            <nav className='NavBar-options'>
                    <NavLink exact to="/" className="NavBar-draft">Draft</NavLink>
                    - 
                    <NavLink exact to="/stats" className="NavBar-stats">Stats</NavLink>
            </nav>
        </>        
    ) 
}

export default NavBar