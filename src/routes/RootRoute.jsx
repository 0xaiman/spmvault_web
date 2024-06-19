import HomePage from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import QuestionMenuPage from "../pages/QuestionMenuPage";
import {
    createBrowserRouter,
  } from "react-router-dom";
import QuestionFrontPage from "../pages/QuestionFrontPage";
import { QuestionLayout } from "../layout/QuestionLayout";
import { ResultLayout } from "../layout/ResultLayout";


  export const routeList = [
    {
      path: "/",
      name:"Home",
      element: <HomePage/>,
      errorElement:<NotFoundPage/>
    },
    {
      path: "/profile",
      element: <ProfilePage/>,
    },
    {
      path: "/register",
      name:"Register",
      element: <RegisterPage/>,
    },
    {
      path: "/login",
      name:"Login",

      element: <LoginPage/>,
    },
    {
      path: "/question-menu",
      name:"Question Menu",

      element: <QuestionMenuPage/>,
    },
    {
      path: "/examination-set/:examination-id",

      element: <QuestionFrontPage/>
    },
    {
      path: "/examination-set/:examination-id/question/:subject/:year/:questionSet",

      element: <QuestionLayout/>
    },
    {
      path: "/exam-set/:year/:subject/:examination_id/result",

      element: <ResultLayout/>
    },
  ]
  
  export const router = createBrowserRouter(routeList);