async function uploadProfilePic(formData){
    try{

      console.log("Uploading image....")

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/upload-profile-pic`,
        {
          method:"POST",
          body:formData
        });

        if(!response.ok){
          const errorText = await response.text()
          throw new Error(`Network Response Not OK: ${errorText}`)
        }
        const data = await response.json();
        sessionStorage.removeItem("profile-picture-path");
        sessionStorage.setItem("profile-picture-path",data.profilePicturePath);
        window.location.reload();
        // console.log()
      

    }catch(error){
      console.error("uploadProfilePic @ ModalImageUpload.jsx :",error)
    }
  }

  export default uploadProfilePic;