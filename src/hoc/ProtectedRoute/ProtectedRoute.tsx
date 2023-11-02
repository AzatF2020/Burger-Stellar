import {FC, ReactNode} from "react";
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router-dom";

interface IProtectedRoute {
  isAuth: boolean | null;
  children: ReactNode;
}

const authPages = {
  "/login": "/login",
  "/register": "/register",
  "/forgot-password": "forgot-password",
  "/reset-password": "reset-password",
}

export const ProtectedRoute: FC<IProtectedRoute> = ({isAuth, children}) => {
  const {pathname} = useLocation()

  if(!isAuth) {
    return (
      <>
        <Navigate to={"/login"}/>
        {children}
      </>
    )
  }

  if(isAuth) {
    if(authPages[pathname as keyof typeof authPages]) {
      return (
        <>
          <Navigate to={"/profile"}/>
          {children}
        </>
      )
    }
  }

  return (<>{children}</>);
};
