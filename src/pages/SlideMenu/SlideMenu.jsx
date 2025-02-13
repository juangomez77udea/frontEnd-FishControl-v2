import { Link } from "react-router-dom";
import { FaClipboardCheck, FaEye, FaBox, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const SlideMenu = ({ isOpen }) => {
    return (
        <div className={`bg-perl min-h-screen w-80 fixed top-0 left-0 shadow-lg flex flex-col justify-center items-center space-y-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="w-full pt-60">
                <Link to={'/insumos'}>
                    <button className="flex items-center justify-center w-full px-2 py-2 text-left border-t border-b border-orange mb-0 ml- text-blue_light hover:bg-green hover:text-perl">
                        <FaClipboardCheck className="text-2xl" />
                        <span className="ml-5 mr-5">Inventario</span>
                    </button>
                </Link>
                <Link to={'/cultivo'}>
                    <button className="flex items-center justify-center w-full px-2 py-2 text-left border-t border-b border-orange mb-0 ml- text-blue_light hover:bg-green hover:text-perl">
                        <FaEye className="text-2xl" />
                        <span className="ml-5 mr-5">Cultivo</span>
                    </button>
                </Link>
                <Link to={'/producto'}>
                    <button className="flex items-center justify-center w-full px-4 py-2 text-left border-t border-b border-orange mb-0 text-blue_light hover:bg-green hover:text-perl bolder">
                        <FaBox className="text-2xl" />
                        <span className="ml-5 mr-5">Producto</span>
                    </button>
                </Link>
                <Link to={'/estadistica'}>
                    <button className="flex items-center justify-center w-full px-4 py-2 text-left border-t border-b border-orange mb-0 ml-2 text-blue_light hover:bg-green hover:text-perl">
                        <FaChartBar className="text-2xl" />
                        <span className="ml-5 mr-5">Estadísticas</span>
                    </button>
                </Link>
            </div>

            <div className="w-full pt-40">
                <Link to={'/'}>
                    <button className="flex items-center justify-center w-full px-4 py-2 text-left border-t border-b border-orange mt-6 text-blue_light hover:bg-green hover:text-perl">
                        <FaSignOutAlt className="text-2xl" />
                        <span className="ml-5 mr-5">Salir</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SlideMenu;