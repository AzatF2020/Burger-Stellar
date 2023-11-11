import {Routes, Route, useLocation} from "react-router-dom";
import {ProtectedRoute} from "../hoc/ProtectedRoute/ProtectedRoute.tsx";
import {
  Home,
  Feed,
  HomeIngredientDetail,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  Profile,
  FeedDetail,
  MyOrders,
  MyOrderDetail
} from "../pages";
import {useEffect} from "react";
import {profileThunk} from "../services/thunks/profileThunk.ts";
import {useAppDispatch} from "../services/hooks.ts";
import {fetchIngredients} from "../services/thunks/fetchIngredients.ts";
import ProfileForm from "../components/ProfileForm/ProfileForm.tsx";

const Routing = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  let background = location.state && location.state?.background;

  useEffect(() => {
    dispatch(profileThunk())

    return () => {
      dispatch(profileThunk())
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchIngredients())

    return () => {
      dispatch(fetchIngredients())
    }
  }, [dispatch]);

  return (
    <>
      <Routes location={background || location}>
        <Route index path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
        <Route path={"/feed"} element={<Feed/>}/>
        <Route path={"/feed/:id"} element={<FeedDetail/>}/>

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
          <Route path={"/profile/orders"} element={<MyOrders/>}></Route>
          <Route path={"/profile/orders/:id"} element={<MyOrderDetail/>}></Route>
        </Route>
      </Routes>

      {background && (<Routes>
        <Route path={"/:id"} element={<HomeIngredientDetail/>}/>
        <Route path={"/feed/:id"} element={<FeedDetail/>}/>
        <Route path={"/profile"} element={
          <ProtectedRoute element={<Profile/>}/>
        }>
          <Route path={"/profile/orders/:id"} element={<MyOrderDetail/>}></Route>
        </Route>
      </Routes>)}
    </>
  );
};

export default Routing;
