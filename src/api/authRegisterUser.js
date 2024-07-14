async function  registerUser({username,password,email,navigate}){

    try{
       const response = await fetch(
            `${import.meta.env.VITE_API_URL}/register`,
            {
                method:"POST",
                headers:{
                     'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username:username,
                    password:password,
                    email:email
                })
        });
        const data = await response.json()

        if(!data.ok){
            return alert(data.message)
        }
        alert(data.message);
        navigate('/login')

        
    }catch(error){
        alert("500 : SERVER RESPONSE ERROR");
    }
}

export default registerUser;