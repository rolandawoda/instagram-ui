import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";


  import HomePage from '../pages/Home';
  import LoginPage from '../pages/Login';
  import ProfilePage from '../pages/Profile';
  import EditProfilePage from '../pages/EditProfile';

  import Page from '../components/page'


  import AuthRoute from './auth_route';


  const Authorised = (props) => {

    return (
        <Page>
            <Switch>
                <AuthRoute path="/profile">
                    <ProfilePage />
                </AuthRoute>
                <AuthRoute path="/updateprofile">
                    <EditProfilePage />
                </AuthRoute>
                <AuthRoute path="/">
                    <HomePage />
                </AuthRoute>
            </Switch>
        </Page>  
    )

  }

  export default Authorised;