import React from 'react';

import Header from './header';
import AppContainer from './app_container';


const Page = ({children}) => {
    return (
        <AppContainer>
        <Header />
        {children}
      </AppContainer>
    )
}

export default Page;