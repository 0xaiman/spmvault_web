const smiley = ":("

export const NotFound = () => {
  return (
    <section className="my-40 mx-auto  max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-4xl md:text-6xl">
                <span className="text-indigo-600"> 404 </span>Page Not Found  {smiley}           
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed md:text-xl">
                Looks like the page you are trying to access doesnt exist or might have been moved. This is likely due to a broken link or a typo in the URL.
            </p>     
        </div>
                
    </section>
  )
}
