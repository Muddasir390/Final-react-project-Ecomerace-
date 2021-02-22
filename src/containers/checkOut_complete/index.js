import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const checkout_complete=()=>{
    return(
        <>
        <Header/>
      
        <div class="section-container" id="checkout-cart">
           
            <div class="container">
                
                <div class="checkout">
                    <form action="checkout_info.html" method="POST" name="form_checkout">
                        
                        <div class="checkout-header">
                           
                            <div class="row">
                               
                                <div class="col-md-3 col-sm-3">
                                    <div class="step">
                                        <a href="checkout_cart.html">
                                            <div class="number">1</div>
                                            <div class="info">
                                                <div class="title">Delivery Options</div>
                                                <div class="desc">Lorem ipsum dolor sit amet.</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="col-md-3 col-sm-3">
                                    <div class="step">
                                        <a href="checkout_info.html">
                                            <div class="number">2</div>
                                            <div class="info">
                                                <div class="title">Shipping Address</div>
                                                <div class="desc">Vivamus eleifend euismod.</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="col-md-3 col-sm-3">
                                    <div class="step">
                                        <a href="checkout_payment.html">
                                            <div class="number">3</div>
                                            <div class="info">
                                                <div class="title">Payment</div>
                                                <div class="desc">Aenean ut pretium ipsum. </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="col-md-3 col-sm-3">
                                    <div class="step active">
                                        <a href="#">
                                            <div class="number">4</div>
                                            <div class="info">
                                                <div class="title">Complete Payment</div>
                                                <div class="desc">Curabitur interdum libero.</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                               
                            </div>
                           
                        </div>
                        
                        <div class="checkout-body">
                            
                            <div class="checkout-message">
                                <h1>Thank you! <small>Your Payment has been successfully processed with the following details.</small></h1>
                                <div class="table-responsive2">
                                    <table class="table table-payment-summary">
                                        <tbody>
                                            <tr>
                                                <td class="field">Transaction Status</td>
                                                <td class="value">Success</td>
                                            </tr>
                                            <tr>
                                                <td class="field">Transaction Reference No.</td>
                                                <td class="value">REF000001</td>
                                            </tr>
                                            <tr>
                                                <td class="field">Bank Authorised Code</td>
                                                <td class="value">AUTH000001</td>
                                            </tr>
                                            <tr>
                                                <td class="field">Transaction Date and Time</td>
                                                <td class="value">05 APR 2016 07:30PM</td>
                                            </tr>
                                            <tr>
                                                <td class="field">Orders</td>
                                                <td class="value product-summary">
                                                    <div class="product-summary-img">
                                                        <img src="assets/img/iphone-6s-plus.png" alt="" />
                                                    </div>
                                                    <div class="product-summary-info">
                                                        <div class="title">iPhone 6s Plus 16GB (Silver)</div>
                                                        <div class="desc">Delivers Tue 26/04/2016 - Free</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="field">Payment Amount (RM)</td>
                                                <td class="value">$999.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p class="text-muted text-center m-b-0">Should you require any assistance, you can get in touch with Support Team at (123) 456-7890</p>
                            </div>
                            
                        </div>
                        
                        <div class="checkout-footer text-center">
                            <button type="submit" class="btn btn-white btn-lg p-l-30 p-r-30 m-l-10">Manage Orders</button>
                        </div>
                       
                    </form>
                </div>
                
            </div>
            
        </div>
       
    
        
        <div id="policy" class="section-container p-t-30 p-b-30 bg-white">
            
            <div class="container">
               
                <div class="row">
                    
                    <div class="col-md-4 col-sm-4">
                       
                        <div class="policy">
                            <div class="policy-icon"><i class="fa fa-truck"></i></div>
                            <div class="policy-info">
                                <h4>Free Delivery Over $100</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        
                    </div>
                  
                    <div class="col-md-4 col-sm-4">
                        
                        <div class="policy">
                            <div class="policy-icon"><i class="fa fa-shield"></i></div>
                            <div class="policy-info">
                                <h4>1 Year Warranty For Phones</h4>
                                <p>Cras laoreet urna id dui malesuada gravida. <br />Duis a lobortis dui.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="col-md-4 col-sm-4">
                        
                        <div class="policy">
                            <div class="policy-icon"><i class="fa fa-user-md"></i></div>
                            <div class="policy-info">
                                <h4>6 Month Warranty For Accessories</h4>
                                <p>Fusce ut euismod orci. Morbi auctor, sapien non eleifend iaculis.</p>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
               
            </div>
            
        </div>
        
        <Footer/>
        </>
    )
}
export default checkout_complete