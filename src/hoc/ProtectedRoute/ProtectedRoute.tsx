import {FC, ReactNode, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../services";
import Loading from "../../components/Loading/Loading.tsx";

interface IProtectedRoute {
  element: ReactNode;
  unAuth?: boolean | null;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({unAuth = false, element}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const {isAuth, userData, isLoading} = useSelector((state: RootState) => state.authSlice)

  useEffect(() => {
    if (!unAuth && !isAuth) navigate("/login", {replace: true})
    if(unAuth && isAuth) navigate(location.state?.path || "/profile", {replace: true})
  }, [navigate, isAuth, userData]);

  return element
};
