import { propTypes } from "react-bootstrap/esm/Image"


const ProfileHeader =(props) => {

    const user = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            email:"mail@mail.com",
            lastlogin:"01-01-2024",
        
        }
    ]
 

    return (
        <>
           <section className="py-4 px-4">
            <div className="max-w-screen-xl mx-auto px-4 text-center  flex flex-col md:flex-row gap-10  bg-white shadow  sm:rounded-lg  ">
              
                <div className="md:my-12  ">
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={user[0].avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                               
                        
                </div>
                <div className="w-full md:text-left my-auto mx-auto md:mx-0 ">
                    <h3 className= "text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        Hello, {props.username}
                    </h3>
                    <div className="flex flex-row gap-4 my-2 text-sm md:text-xl  justify-center md:justify-start">
                        <p className="text-gray-600   ">
                            email : {props.email}
                        </p>
                        <p className="text-gray-600  ">
                            Last login : {props.lastLogin}
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    
        </>
     
    )
}


export default ProfileHeader