import { Link } from 'react-router-dom'

export const NavAuthButton = ({isLoggedIn,username,handleSignOut}) => {
  return (
    <>
         <li className="order-2 pb-5 md:pb-0 flex flex-col md:flex-row gap-3">
                            {
                                isLoggedIn ? 
                                (
                                <>
                                  {/* <Link  to={`/profile/?username=${username}`}  className="py-3 px-6 mx-2 rounded-md shadow-md text-white text-center bg-gray-800 focus:shadow-none block md:inline">
                                    User Profile
                                    </Link> */}
                                    <Link to={"/"} onClick={handleSignOut}  className="py-3 px-6 mx-2 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">
                                    Sign Out
                                    </Link>
                                </>
                              
                                
                                ):(
                                <Link to={"/login"} className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">
                                    Sign In
                                </Link>
                                )
                            }
                            
                        </li>
    </>
  )
}
