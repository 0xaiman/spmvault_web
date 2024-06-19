import { Link } from 'react-router-dom'

export const CenterNavLinks = ({routeList}) => {
  return (
    <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
        {
            routeList.map((item, idx) => (
                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
                ))
            }

    </div>

          
    
  )
}
