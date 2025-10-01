import { RxMagnifyingGlass } from "react-icons/rx";
import { NavLink } from "react-router";

export default function Header() {
    return (
        <nav className='px-30 py-3 shadow-lg flex items-center justify-between'>
            <NavLink className='font-bold text-lg text-shadow-green-300' to={'/recipe'}>Recipes</NavLink>
            <NavLink className='w-70 bg-blue-100 rounded-2xl px-4 py-1 flex items-center gap-2' to={'search'}>
                <RxMagnifyingGlass />
                <div>Search recipes</div>
            </NavLink>
        </nav>
    )
}
