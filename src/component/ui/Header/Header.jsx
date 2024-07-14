import { useCallback, useEffect, useState } from 'react';
import logo from "../../../assets/media/logo/logo.svg"
import { routeList } from '../../../routes/RootRoute';
import { Link } from 'react-router-dom';

 //if user logs out, delete all the stored data (localSTorage)
 //declared outside the component to avoid re-render
 function deleteLocalStorage(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("lastLogin");
    sessionStorage.removeItem("questionSetsMenu");  
    sessionStorage.removeItem("profile-picture-path")  
}

 const Header = () => {
    const [state, setState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);
    
    //using useEfffect, updates only when the component mounts
    useEffect(()=>{
    setUsername(sessionStorage.getItem("username"))
    setIsLoggedIn(Boolean(sessionStorage.getItem("token")))
    },[isLoggedIn])


    //triggers from sign out button
    //using useCallback, updates only when the component mounts
    const handleSignOut = useCallback(()=>{
        deleteLocalStorage();
        setIsLoggedIn(false);
    },[])


   
  return (
<header className='bg-white'>
        <nav className=" items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 lg:flex lg:space-x-6">
                    <div className="flex justify-between">
                        <Link to={"/"}>
                            <img
                                src={logo} 
                                width={120} 
                                height={50}
                                alt="logo"
                            />
                        </Link>
                        <button className="text-gray-500 outline-none lg:hidden"
                            onClick={() => setState(!state)}
                            // hamburger icon, visible on mobile
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul className={`flex-1 justify-between mt-12 lg:flex lg:mt-0 ${state ? '' : 'hidden'}`}>
                        <li className="order-2 pb-5 lg:pb-0 flex flex-col lg:flex-row gap-3">
                                <>
                                {isLoggedIn?
                                (
                                <><Link  to={`/profile/?username=${username}`}  className="py-3 px-6 mx-2 rounded-md shadow-md text-white text-center bg-gray-800 focus:shadow-none block lg:inline">
                                    User Profile
                                    </Link>
                                    <Link to={"/"} onClick={handleSignOut}  className="py-3 px-6 mx-2 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block lg:inline">
                                    Sign Out
                                    </Link></>):( <Link to={"/login"} className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block lg:inline">
                                                Sign In
                                    </Link>)
                                }
                               
                                </>   
                        </li>
                        <div className="order-1 flex-1 justify-center items-center space-y-5 lg:flex lg:space-x-6 lg:space-y-0 mx-5 py-5 lg:mx-0 lg:py-0">
                            {
                                routeList.map((item, idx) => (
                                    <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
        </nav>
    </header>
      


  )
}
export default Header;
