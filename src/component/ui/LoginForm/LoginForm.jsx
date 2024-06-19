
import { useState } from 'react'
import { loginUser } from '../../../api/authLoginUser';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit=(event)=>{
        event.preventDefault();
        loginUser({
            email,
            password,
            navigate
        })
       
    }
  return (
        <div id="form-container" className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg w-3/4  lg:w-2/5">
        <form onSubmit={handleSubmit} className='space-y-5'>
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
            <button  className=" font-medium px-6 py-3.5 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg w-full"> Login</button>
        </form>

    </div>
  )
}


export default LoginForm;