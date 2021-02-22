import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const my_account=()=>{
    return(
        <>
        <Header/>
       
        <div id="page-header" class="section-container page-header-container bg-black hide">
            
            <div class="page-header-cover">
                <img src="assets/img/about-us-cover.jpg" alt="" />
            </div>
            
            <div class="container">
                <h1 class="page-header"><b>About</b> Us</h1>
            </div>
            
        </div>
        
        <div id="about-us-cover" class="section-container">
            
            <div class="container">
                
                <ul class="breadcrumb m-b-10 f-s-12">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Store</a></li>
                    <li class="active">My Account</li>
                </ul>
                
                <div class="account-container">
                    
                    <div class="account-sidebar">
                        <div class="account-sidebar-cover">
                            <img src="assets/img/my-account-cover.jpg" alt="" />
                        </div>
                        <div class="account-sidebar-content">
                            <h4>Your Account</h4>
                            <p>
                                Modify an order, track a shipment, and update your account info.
                            </p>
                            <p>
                                All you need in one place. All with a few simple clicks.
                            </p>
                        </div>
                    </div>
                   
                    <div class="account-body">
                        
                        <div class="row">
                            
                            <div class="col-md-6">
                                <h4><i class="fa fa-gitlab fa-fw text-muted"></i> Orders</h4>
                                <ul class="nav nav-list">
                                    <li><a href="#">Check the status of an order</a></li>
                                    <li><a href="#">Track a shipment</a></li>
                                    <li><a href="#">Pre-sign for a delivery</a></li>
                                    <li><a href="#">Cancel items</a></li>
                                    <li><a href="#">Print an invoice</a></li>
                                    <li><a href="#">Return items</a></li>
                                    <li><a href="#">Change shipping or billing info for an order</a></li>
                                    <li><a href="#">Edit gift messaging or engraving</a></li>
                                    <li><a href="#">View order history</a></li>
                                </ul>
                                <h4><i class="fa fa-universal-access fa-fw text-muted"></i> Account Settings</h4>
                                <ul class="nav nav-list">
                                    <li><a href="#">Update your email address and password</a></li>
                                    <li><a href="#">Change your default shipping or billing info</a></li>
                                    <li><a href="#">Manage email subscriptions</a></li>
                                </ul>
                            </div>
                           
                            <div class="col-md-6">
                                <h4><i class="fa fa-cc-visa fa-fw text-muted"></i> Payments & Financing</h4>
                                <ul class="nav nav-list">
                                    <li><a href="#">Check the balance of a gift card</a></li>
                                    <li><a href="#">Check the status of a rebate</a></li>
                                </ul>
                                <h4><i class="fa fa-wpforms fa-fw text-muted"></i> Specialists</h4>
                                <ul class="nav nav-list">
                                    <li><a href="#">View your previous activity</a></li>
                                </ul>
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
export default my_account