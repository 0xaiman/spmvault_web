
import { useEffect, useState } from 'react'
import registerUser from '../../../api/authRegisterUser';
import { Link, useNavigate } from 'react-router-dom';
import { GenericError } from '../../GenericError';

const RegisterForm = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    //check with sessionstorage 
    //to prevent user from Resgiter new Account while Logged in
    useEffect(()=>{
        const token = sessionStorage.getItem("token");
        if(token){
            setIsLoggedIn(true);
        }
    },[isLoggedIn])

    const handleSubmit=(event)=>{

        event.preventDefault();
        registerUser({
                username,
                password,
                email,
                navigate
            })
    }

    if(isLoggedIn){
    return (
    <GenericError
    errorMessage={"You are already Logged In"}
    />
    )
 }

  return (

    <div className=' flex flex-col items-center justify-centersm:px-4'>
          <div className="text-center my-5">
            <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <Link to={'/login'} className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
            </div>
        </div>
        <div id="form-container" className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg  w-3/4  lg:w-2/5">
        <form onSubmit={handleSubmit} className='space-y-5'>
            <fieldset >
                <label htmlFor='username' className="font-medium"> Username :</label>
                <input name='username'
                id='username'
                value={username}
                onChange={(event)=>{
                    setUsername()
                    setUsername(event.target.value)
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
            </fieldset>
            <fieldset >
                <label htmlFor='email' className="font-medium"> Email :</label>
                <input name='email'
                    type='email'
                id='email'
                value={email}
                onChange={(event)=>{
                    setEmail()
                    setEmail(event.target.value)
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"

                />
            </fieldset>
            <fieldset >
                <label htmlFor='password' className="font-medium"> Password :</label>
                <input name='password'
                type='password'
                id='password'
                value={password}
                onChange={(event)=>{
                    setPassword()
                    setPassword(event.target.value)
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"

                />
            </fieldset>
            <button  className=" font-medium px-6 py-3.5 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg w-full"> Create Account</button>
        </form>

    </div>
    
    </div>
   

    
     
  )
}



export default RegisterForm