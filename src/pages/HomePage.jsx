import Header from '../component/ui/Header/Header';
import { Hero } from '../component/Hero';


function HomePage(){
    return (
        <div className='bg-gray-100 h-screen'> 
            <Header/>
            <Hero/>
        </div>
    )
}

export default HomePage;