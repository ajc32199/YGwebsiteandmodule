import {NavLink} from 'react-router-dom';

export default function NavBar(){
    return(
        <div>
            <nav className="flex justify-between items-center mb-6">
                <NavLink to="/">
                    <img alt="TKE Logo" className="h-10 inline" src="https://en.wikipedia.org/wiki/Tau_Kappa_Epsilon#/media/File:Tau_Kappa_Epsilon_Coat_of_Arms.png"/>
                </NavLink>
                <NavLink className="inline-flex items-center justify-center
                whitespace-nowrap text-md font-medium ring-offset-background
                transition-colors focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ring
                focus:visible:ring-offset-2 disabled:pointer-events-none
                disabled:opacity-50border border-input bg-background
                hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
                    Create Member
                </NavLink>
            </nav>
            
        </div>
    )
}