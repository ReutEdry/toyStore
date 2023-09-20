import { NavLink } from 'react-router-dom'
import { UserMsg } from './UserMsg'

export function AppHeader() {

    return (
        <header className="app-header">
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/toy">Toys</NavLink> |
                <NavLink to="/about">About Us</NavLink> |
            </nav>
            <h1>My App</h1>
            <UserMsg />
        </header>
    )
}

