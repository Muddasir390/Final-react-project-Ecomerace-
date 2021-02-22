import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    withRouter
  } 
  from "react-router-dom";
  const Protected=({component :Component,...rest})=>(

    <Route
    {...rest}
        render={(props)=>
          localStorage.getItem('name')? (
                <Component {...props}/>
            ):
            <Redirect
                to='/Login'
            />
        

        }
    />
  )
  export default Protected