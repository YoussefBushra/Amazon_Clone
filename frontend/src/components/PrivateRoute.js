import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  //const auth = useAuth();
  //return auth ? children : <Navigate to="/login" />;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //const history = useNavigate();
  return (
    <Route 
      {...rest}
      render={(props) =>
        userInfo ? (
          <Component {...props}></Component>
        ) : (
          <Navigate to="/signin" />
        )
      }
    ></Route>
  );
}

