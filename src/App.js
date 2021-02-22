import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} 
from "react-router-dom";
import Product from './containers/Product/index';
import Index from './containers/Home/Index';
import ProductDetail from './containers/productDetail/index';
import Search from './containers/search/index';
import CheckOut from './containers/checkOut/index';
import Checkout_info from './containers/checkOut_info/index';
import CheckOut_payment from './containers/checkOut_payment/index';
import checkout_complete from './containers/checkOut_complete/index';
import my_account from './containers/my_account/index';
import contact_us from './containers/contact_us/index';
import about_us from './containers/About_us/index';
import faq from './containers/FAQ/index';
import Longin from './components/Login';
import Protected from './components/Protected';



function App() {
  return (
    
     <Router>
       <Switch>
       <Route exact path="/Login" component={Longin}/>
       <Protected exact path="/" component={Index}/>
       <Protected exact path="/Product" component={Product}/>
       <Protected exact path="/ProductDetail/" component={ProductDetail} />
       <Protected exact path="/Search" component={Search} /> 
       <Protected exact path="/checkOut" component={CheckOut}/>
       <Protected exact path="/checkOut_info" component={Checkout_info}/>
       <Protected exact path="/checkOut_payment" component={CheckOut_payment}/>
       <Protected exact path="/checkOut_complete" component={checkout_complete}/>
       <Protected exact path="/my_account" component={my_account}/>
       <Protected exact path="/contact_us" component={contact_us}/>
       <Protected exact path="/about_us" component={about_us}/>
       <Protected exact path="/faq" component={faq}/>
       </Switch>
     </Router>
  );
}

export default App;
