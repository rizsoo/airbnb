import './Layout.css';
import './index.css'
import {useState, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';
import logo from './img/logo.png'

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();
    
    return (
        <div className='layout'>
            <div className="header">
                <LanguageSelector />
                <div className="header-content">
                    <Link to="/"><img src={logo} /></Link>
                    <ion-icon onClick={() => setIsOpen(!isOpen)} className={isOpen ? "arrow" : null} name={isOpen ? "close-circle-outline" : "chevron-down-circle-outline"}></ion-icon>
                    <div 
                        className="navbar" 
                        ref={parentRef}
                        style={isOpen ? {
                            height: parentRef.current.scrollHeight + "px",
                        }
                        : {
                            height: "0px",
                        }
                    }
                        >
                        <Navbar setIsOpen={setIsOpen} />
                    </div>
                </div>
                
            </div>
            <Outlet/>
            <div className='footer'>Created by <b><a href="https://www.linkedin.com/in/kristof-feher-hun" target="_blank">Kristóf Fehér</a></b> in <i>React Native</i> <ion-icon name="logo-react"></ion-icon></div>
        </div>
    )
}
export default Layout;