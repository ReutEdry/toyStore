import { NavLink } from 'react-router-dom'
import { UserMsg } from './UserMsg'

export function AppHeader() {

    return (
        <header className="app-header">
            <h1>Reut's Toy Shop</h1>
            {/* <img src="https://img.freepik.com/premium-vector/train-kids-toys-logo-vector_586862-66.jpg?w=2000" alt="" /> */}
            <nav className='nav-container'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/toy" className='toys-link'>Toys</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            <UserMsg />
        </header>
    )
}

