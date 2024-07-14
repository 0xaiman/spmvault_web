import logo from "../assets/media/logo/logo.svg"

const  Footer=() => {

    const footerNavs = [
        {
            name: 'Terms'
        },
        {
            name: 'License'
        },
        {
            name: 'Privacy'
        },
        {
            name: 'About us'
        }
    ]
    return (
        <footer className="md:pt-3 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="flex flex-col md:flex-row md:justify-between ">
                        {/* <img src="https://www.floatui.com/logo.svg" className="w-32" /> */}
                        <div>
                            <img src={logo}
                            className="w-32 md:w-56"
                            />
                            <p className="max-w-md hidden md:block ">
                                Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.
                            </p>

                        </div>
                       
                        <ul className="flex md:flex-col items-center md:items-start gap-2 p-2 text-sm sm:text-base md:mx-24">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="text-gray-800 hover:text-gray-500 duration-150">
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                 
                <div className=" py-3 border-t md:text-center">
                    <p>© 2024 placeholder Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;