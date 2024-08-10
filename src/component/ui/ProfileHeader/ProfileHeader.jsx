import React, { useState } from 'react';
import ModalImgUpload from '../ModalImgUpload';
import profilePictureFallback from "../../../assets/profile-picture-fallback/default.jpg"

function formatDate(dateString) {
    if (!dateString) {
        return "No previous login";
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return " - ";
    }

    return new Intl.DateTimeFormat('ms-MY', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
}



const ProfileHeader = (props) => {
    const [imgUploadModal, setImgUploadModal] = useState(false);
    const profileImagePath = window.sessionStorage.getItem("profile-picture-path");

    console.log(profileImagePath)

    function handleImgUpload(){
        setImgUploadModal(true);
    }



    return (
        <>
       
            <section className="py-4 px-4">
            {
            imgUploadModal && 
            <ModalImgUpload 
            open={imgUploadModal}
            onClose={() => setImgUploadModal(false)}
            />
        }
                <div className="max-w-screen-lg mx-auto px-4 text-center flex flex-col md:flex-row gap-10 bg-white shadow sm:rounded-lg">
                    <div className="md:my-12">
                        <div className="w-24 h-24 mx-auto">
                            <img
                                // src={`${import.meta.env.VITE_API_URL}/${profileImagePath}` || profilePictureFallback}
                                src={profileImagePath ? `${import.meta.env.VITE_API_URL}/${profileImagePath}` : profilePictureFallback}
                                // src="http://localhost:3000/assets/profile-picture/a4e34fa3-39a6-4d9d-879e-a614157e7ded.png"
                                className="w-full h-full rounded-full hover:cursor-pointer  hover:opacity-50 transition duration-300 "
                                alt=""
                                onClick={handleImgUpload}
                            />
                        </div>
                    </div>
                    <div className="w-full md:text-left my-auto mx-auto md:mx-0">
                        <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                            Hello, {props.username}
                        </h3>
                        <div className="flex flex-row gap-4 my-2 text-sm md:text-xl justify-center md:justify-start">
                            <p className="text-gray-600">
                                Email: {props.email}
                            </p>
                            <p className="text-gray-600">
                                Last login: {formatDate(props.lastLogin)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProfileHeader;
