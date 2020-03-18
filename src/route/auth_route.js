import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const AuthenticatedRoute = ({children, ...rest}) => {
    const auth = true;
    return (
        <Route
          {...rest}
            render={(props) =>
                auth? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login"
                    }}
                />
                )
            }
        />
        )
}

export default AuthenticatedRoute;