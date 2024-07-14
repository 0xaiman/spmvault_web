import { Link } from 'react-router-dom';

const getStartedButonRoute = "/question-menu"

export const Hero = () => {
  return (
    <section className="my-20 mx-auto  max-w-screen-xl pb-4 px-4 sm:px-8">
    <div className="text-center space-y-4">
        <h1 className="text-gray-800 font-bold text-4xl md:text-6xl">
            Your Path to  
             <span className="text-indigo-600"> Excellence </span>
             Starts Here
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed md:text-xl">
        Interactive practice exams to boost your confidence and performance.Join now and unlock a comprehensive question database tailored for you. Get ahead anytime, anywhen.
        </p>
    </div>
    <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        {/* <a href="/question-menu" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
            Get started
        </a> */}
        <Link to = {getStartedButonRoute} className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"> Get started</Link>
        {/* <a href="javascript:void(0)" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
            Try it out
        </a> */}
    </div>
</section>
  )
}
