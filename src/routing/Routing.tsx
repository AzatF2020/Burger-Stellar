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
import {useEffect} from "react";
import {profileThunk} from "../services/thunks/profileThunk.ts";
import {useAppDispatch} from "../services/hooks.ts";
import {fetchIngredients} from "../services/thunks/fetchIngredients.ts";
import ProfileForm from "../components/ProfileForm/ProfileForm.tsx";

const Routing = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  let state = location.state && {backgroundLocation: Location}

  useEffect(() => {
    dispatch(profileThunk())

    return () => dispatch(profileThunk())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchIngredients())

    return () => dispatch(fetchIngredients())
  }, [dispatch]);

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route index path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
        <Route path={"/orders"} element={<Orders/>}/>

        {/* #NOTE: Authorization */}
        <Route path={"/register"} element={
          <ProtectedRoute unAuth={true} element={<Register/>}/>
        }/>
        <Route path={"/login"} element={
          <ProtectedRoute unAuth={true} element={<Login/>}/>
        }/>
        <Route path={"/forgot-password"} element={
          <ProtectedRoute unAuth={true} element={<ForgotPassword/>}/>
        }/>
        <Route path={"/reset-password"} element={
          <ProtectedRoute unAuth={true} element={<ResetPassword/>}/>
        }/>
        <Route path={"/profile"} element={
          <ProtectedRoute element={<Profile/>}/>
        }>
          <Route path={"/profile"} index={true} element={<ProfileForm/>}></Route>
          <Route path={"/profile/orders"} element={<ProfileForm/>}></Route>
        </Route>
      </Routes>

      {state?.backgroundLocation && (<Routes>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
      </Routes>)}
    </>
  );
};

export default Routing;
