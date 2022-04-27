import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './bot/config.js';
import MessageParser from './bot/Messageparser.js';
import ActionProvider from './bot/ActionProvider.js';
import $ from 'jquery';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Signup from './components/signup'
import Dashboard from './components/dashbord'
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import ImagePose from './components/ImagePose'
import Room from './Room'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};




const App = () => {

  const childRef = useRef();
  let location = useLocation();



  useEffect(() => {

    setInterval(function () {
    
    $("body").dblclick(function(){
      $(".react-chatbot-kit-chat-inner-container").toggle()
    }  );
  }
    , 1000); 
    
 
  
  });

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    trackPage(page);
  }, [location]);

  return (

        <AuthProvider>
          <ScrollReveal
            ref={childRef}
            children={() => (
              <Switch>
                <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
                <AppRoute exact path="/Signup" component={Signup} />
                <AppRoute exact path="/dashbord" component={Dashboard} />
                <AppRoute exact path="/imgpose" component={ImagePose} />
                <AppRoute exact path="/Login" component={Login} />
                <AppRoute exact path="/room" component={Room} />




                
              </Switch>
            )} />

<Chatbot
        style={{"position":"fixed","right":0,"bottom":0}}
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />

        </AuthProvider>

  );
}

export default App;