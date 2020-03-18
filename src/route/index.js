import {
    Switch,
    Route
  } from "react-router-dom";

import React from 'react';
   
import LoginPage from '../pages/Login';


import AuthRoute from './authorised_routes';
import CenteredLayout from "../components/center_layout";



  const Routes = (props) => {

    return (
        <Switch>
            <Route path="/login">
                <CenteredLayout>
                    <LoginPage />
                </CenteredLayout>
            </Route>
            <AuthRoute />
        </Switch>
    )

  }

  export default Routes;