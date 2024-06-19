// import logo from "../assets/media/logo/logo.svg"
import { Link } from "react-router-dom"
import LoginForm from "../component/ui/LoginForm/LoginForm"
import Header from "../component/ui/Header/Header";

export const LoginPage = () => {
    const registerLink = "/register";
  return (
    <div className="w-full h-screen  bg-gray-100">
    <Header/>
              <div className='  flex flex-col items-center justify-center bg-gray-100 sm:px-4'>
                  <div className="text-center my-5">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don`t have an account? <Link to={registerLink} className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link></p>

                    </div>
                </div>
            <LoginForm/>
        </div>

    
    </div>
       
  )
}
