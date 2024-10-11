import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({isSignedin, children})=>{
    // console.log(isSignedin)
    if (!isSignedin) {
        return <Navigate to="/" />;
      }
      return children;
}