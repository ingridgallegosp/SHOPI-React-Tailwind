import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { ShopiCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import routes from '../../utils/routes'

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShopiCartContext)

    
    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className="font-semibold text-lg">
                    <NavLink to={routes.HOME}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.HOME}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.CLOTHES}
                        onClick={()=> context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.ELECTRONICS}
                        onClick={()=> context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.FURNITURE}
                        onClick={()=> context.setSearchByCategory('furniture')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.TOYS}
                        onClick={()=> context.setSearchByCategory('toys')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.OTHERS}
                        onClick={()=> context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    hello@shopi.com
                </li>
                <li>
                    <NavLink
                        to={routes.MYORDER}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.MYACCOUNT}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.SIGNIN}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                    <div> {context.count} </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar