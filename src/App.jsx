import { router } from "./routes/RootRoute"
import {  BrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
       <RouterProvider router={router} />
    </BrowserRouter>
  )
}

export default App
