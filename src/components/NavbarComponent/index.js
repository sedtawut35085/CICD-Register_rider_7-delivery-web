import { useContext} from 'react'
import Auth from '../../configuration/configuration-aws'
import riderphoto from '../../assets/rider.png'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/Auth'
import * as constant from '../../constant/content'
import './style.css'

const NavbarComponent = () => {

    const navigate = useNavigate()

    const logout = async () => {
        await Auth.signOut();
        navigate('/')
    }
    const { currentEmailUser } = useContext(AuthContext);

    return (
        <div>
            <nav className="bg-white border-gray-200 px-0 sm:px-4 py-1 rounded dark:bg-gray-900 border-b-2 ">
                <div className="md:px-5 py-1 flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt=""/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{constant.NavbarContent.titlelogo}</span>
                    </div>
                    <div className="flex items-center md:order-2 dropdown">
                        <button type="button" className="flex mr-3 text-sm py-2 bg-gray-100 px-4 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <h5 className='pt-1 pr-2' >{currentEmailUser}</h5> 
                            <img className="w-6 h-6 rounded-full" src={riderphoto} alt="" />
                            <svg className="fill-current h-4 w-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                        <div className="z-50 absolute mt-8 ml-8 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <ul className="dropdown-menu hidden text-gray-900 pt-0">
                                <li className="-mb-2">
                                    <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm" href='#' onClick={logout}>{constant.NavbarContent.logout}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </nav>
        </div>
    )

}

export default NavbarComponent;