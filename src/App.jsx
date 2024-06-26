import { router } from "./routes/RootRoute"
import {  BrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
