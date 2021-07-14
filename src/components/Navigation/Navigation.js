import './Navigation.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar shadow-lg">
            <div className="navbar-base flex flex-row py-2 z-10">
            <h1 className="brand-name mt-1 ml-8 text-2xl font-semibold text-white">
                <Link to="/">
                    MyIdeas
                </Link>
                </h1>
                <ul className="nav-options hidden sm:block flex flex-row ml-14 mt-2 text-lg text-white">
                    <Link to="/" className="nav-link mr-10 my-2">Home</Link>
                    <Link to="/create" className="nav-link my-2">Create</Link>
                </ul>

                <Link to="/create" className="ml-auto">
                <i 
                className="fas fa-pen sm:hidden ml-auto text-white mt-2.5 mr-5 text-xl"
                >
                </i>
                </Link>        
                
            </div>

        </div>
    );
}
 
export default Navbar;