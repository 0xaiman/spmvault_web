
export const GenericError = ({errorMessage}) => {
  return (
    <div className=' flex flex-col items-center justify-centersm:px-4'>
    
    <section className="my-40 mx-auto  max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-4xl md:text-6xl">
                <span className="text-indigo-600"> Error </span> Invalid Request            
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed md:text-xl">
                {errorMessage}
            </p>     
        </div>
                
    </section>
    </div>
  )
}
