import {Routes, Route, useLocation} from "react-router-dom";
import {ProtectedRoute} from "../hoc/ProtectedRoute/ProtectedRoute.tsx";
import {
  Home,
  Orders,
  HomeIngredientDetail,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  Profile
} from "../pages";
import {useSelector} from "react-redux";
import {RootState} from "../services";
import {useAppDispatch} from "../services/hooks.ts";
import {useEffect} from "react";
import {fetchIngredients} from "../services/thunks/fetchIngredients.ts";
import {userThunk} from "../services/thunks/userThunk.ts";

const Routing = () => {
  const location = useLocation()
  const isAuth = useSelector((state: RootState) => state.authSlice.isAuth)
  let state = location.state && {backgroundLocation: Location}

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchIngredients())
    dispatch(userThunk())
  }, [dispatch]);

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route index path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
        <Route path={"/orders"} element={<Orders/>}/>

        {/* #NOTE: Authorization */}
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={
          <ProtectedRoute isAuth={isAuth}>
            <Login/>
          </ProtectedRoute>
        }/>
        <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
        <Route path={"/reset-password"} element={
          <ProtectedRoute isAuth={isAuth}>
            <ResetPassword/>
          </ProtectedRoute>
        }/>
        <Route path={"/profile"} element={
          <ProtectedRoute isAuth={isAuth}>
            <Profile/>
          </ProtectedRoute>
        }/>
      </Routes>

      {state?.backgroundLocation && (<Routes>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
      </Routes>)}
    </>
  );
};

export default Routing;
