import Header from '../component/ui/Header/Header';
import { Hero } from '../component/Hero';
import Footer from '../component/Footer';


function HomePage(){
    return (
        <div className='bg-gray-100 h-screen'> 
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    )
}

export default HomePage;