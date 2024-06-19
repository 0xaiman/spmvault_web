import Header from '../component/ui/Header/Header';
import RegisterForm from '../component/ui/RegisterForm/RegisterForm';
// import logo from "../assets/media/logo/logo.svg"
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    const loginLink = "/login"
  return (
    <div className=' bg-gray-100 w-full h-screen'>
        <Header/>
        <div className=' flex flex-col items-center justify-centersm:px-4'>
                <div className="text-center my-5">
                    {/* <img src={logo} width={150} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <Link to={loginLink} className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                    </div>
                </div>
            <RegisterForm />
        </div>
    </div>
     
  )
}
