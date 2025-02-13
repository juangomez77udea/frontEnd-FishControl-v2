import { FaBars } from 'react-icons/fa';
import imagenes from "../../assets/images/images";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-blue_dark fixed top-0 left-0 right-0 z-40">
            <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 items-center">
                    <button
                        className="text-white lg:hidden mr-4"
                        onClick={toggleSidebar}
                    >
                        <FaBars className="h-6 w-6" />
                    </button>
                    <div className="flex items-center">
                        <img className="h-12 w-auto" src={imagenes.logo1 || "/placeholder.svg"} alt="Fish Control Logo" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;