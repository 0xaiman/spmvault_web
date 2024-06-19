import { Link } from 'react-router-dom'

export const NavLogo = ({logo,state,setState}) => {
  return (
          <div className="flex justify-between">
            <Link to={"/"}>
                <img
                src={logo} 
                width={120} 
                height={50}
                alt="logo"
                />
                </Link>
            <button className="text-gray-500 outline-none md:hidden"
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
  )
}
