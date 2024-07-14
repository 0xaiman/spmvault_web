export async function loginUser({email,password,navigate}){
    try{
        // check if token in sessionStorage already exist ie logged in
      const isLoggedIn = Boolean(window.sessionStorage.getItem("token"));
      if(isLoggedIn){
        return alert("User already logged in")
      }

      //api call
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/login`,
            {
                method:"POST",
                headers:{
                     'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    password:password,
                    email:email
                })
        });

        const data = await response.json()
        //check if input results in error on BE side, render message from BE
        if(!data.ok){
            return alert(data.message)
        }
        //stores user data in sessionSTorage
        window.sessionStorage.setItem('token',data.token);
        window.sessionStorage.setItem('id',data.id);
        window.sessionStorage.setItem('username',data.username);
        window.sessionStorage.setItem('email',data.email);
        window.sessionStorage.setItem('lastLogin',data.lastLogin);
        window.sessionStorage.setItem('profile-picture-path', data.profilePicturePath)
        navigate(`/profile/?username=${data.username}`) //directs to user Profile Page

    }catch(error){
        console.error("Error at authLoginUser:", error);
        alert("An unexpected error occurred. Please try again.");
    }
}