import * as Dialog from "@radix-ui/react-dialog";
import uploadPlaceholder from "../../assets/upload.svg"
import { useState } from "react";
import uploadProfilePic from "../../api/uploadProfilePic";
function  ModalImgUpload({open,onClose, handleSubmitAttempt, pause}){
  const [uploadedImage,setUploadedImage] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null)

  // detect event - if image is uploaded
  const handleFileChange =(event)=>{
    const file = event.target.files[0];
    if(file){
      setUploadedImage(file)
      setUploadPreview(URL.createObjectURL(file))
    }
  }

  function handleModalImgUpload(){

    if(!uploadedImage){
      alert("No file Selected")
      return;
    }

    const formData = new FormData();
    formData.append("username",sessionStorage.getItem("username"));
    formData.append("profile",uploadedImage);
   
    uploadProfilePic(formData);

  }

  

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
    
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 w-full max-w-lg">
          <div className="bg-white rounded-md shadow-lg px-4 py-6  md:block ">
            
            <div className="mt-2 text-center ">
              <Dialog.Title className="text-lg font-medium text-gray-800 my-2">
                {" "}
                Upload your Profile Picture
              </Dialog.Title>               
                <div className="flex items-center justify-center w-full mx-auto">
                 
                  <label htmlFor="input-file" id="dropzone">
                    <input type="file" accept="image/*" id="input-file" hidden onChange={handleFileChange}/>
                      <div id="img-view" className="w-max">
                      {uploadPreview  ?
                  (
                    <img src={uploadPreview} alt="uploaded" className="h-24 w-24 mx-auto rounded-full "/>
                  ):(
                    <>
                      <img src={uploadPlaceholder} className="w-1/2 mx-auto opacity-25"/>
                    </>
                  )
                }
                      <p>Drag and drop any images to upload or click here</p>

                      </div>
                  </label>
                </div> 

              <div className="items-center gap-2 mt-3 text-sm sm:flex">
                <Dialog.Close asChild>
                  <button 
                  onClick={handleModalImgUpload}
                  // to={`/exam-set/${year}/${subject}/${examination_id}/result`}
                   className="w-full mt-2 p-2.5 flex-1 text-white text-center bg-green-600 rounded-md ring-offset-2 ring-gray-200 focus:ring-2">
                    Upload
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    aria-label="Close"
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md border ring-offset-2 ring-indigo-600  text-center focus:ring-2"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ModalImgUpload;
