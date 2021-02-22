import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useHistory} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addForm } from '../productDetail/redux/action';

const Checkout_info=(props)=>{
    const history=useHistory()
    const [formData,setFormData]=useState({firstName: '',lastName: '',
    companyName: '',areaCode:'',primaryPhone:'',streetAddress:'',zipCode:'',})

    const form_info=e=>{
        e.preventDefault();
        if((formData.firstName).length<1 || (formData.lastName).length<1
        ||(formData.companyName).length<1 || (formData.areaCode).length<1
        || (formData.primaryPhone).length<1 || (formData.streetAddress).length<1
        || (formData.streetAddress).length<1 || (formData.zipCode).length<1){
            alert('all fields are necessary')
        }
        else{
            alert('data send')

        }
    }
    

   return (
        <>
        <Header/>
        
        <div class="section-container" id="checkout-info">
           
            <div class="container">
                
                <div class="checkout">
                    <form  name="form_shipping" class="form-horizontal">
                        
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
                                    <div class="step active">
                                        <a href="#">
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
                                    <div class="step">
                                        <a href="checkout_complete.html">
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
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    First Name <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-4">
                                    <input 
                                    onChange={(e)=>setFormData(prevState => ({...prevState,firstName: e.target.value}))}
                                    type="text" value={formData.firstName} class="form-control" name="first_name" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    Last Name <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-4">
                                    <input
                                    onChange={(e)=>setFormData(prevState => ({...prevState,lastName: e.target.value}))}
                                     type="text" value={formData.lastName} class="form-control" name="last_name"  placeholder="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    Company Name (optional)<span class="text-danger">&nbsp;</span>
                                </label>
                                <div class="col-md-8">
                                    <input 
                                    onChange={(e)=>setFormData(prevState => ({...prevState,companyName: e.target.value}))}
                                    type="text" value={formData.companyName} class="form-control" name="company_name" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    Area Code <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-4">
                                    <input
                                    onChange={(e)=>setFormData(prevState => ({...prevState,areaCode: e.target.value}))}
                                     type="text" value={formData.areaCode} class="form-control" name="area_code"  placeholder="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    Primary Phone <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-4">
                                    <input
                                    onChange={(e)=>setFormData(prevState => ({...prevState,primaryPhone: e.target.value}))}
                                     type="text" value={formData.primaryPhone} class="form-control" name="primary_phone" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    Street Address <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-4">
                                    <input
                                    onChange={(e)=>setFormData(prevState => ({...prevState,streetAddress: e.target.value}))}
                                    value={formData.streetAddress}
                                     type="text" class="form-control m-b-10" name="address_1" value={formData.streetAddress} placeholder="" />
                                    <input type="text" class="form-control" name="address_2" value="" placeholder="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    ZIP Code<span class="text-danger">*</span>
                                </label>
                                <div class="col-md-4">
                                    <input 
                                    onChange={(e)=>setFormData(prevState => ({...prevState,zipCode: e.target.value}))}
                                    value={formData.zipCode} type="text" class="form-control" name="zip_code" placeholder="" />
                                    <p class="help-block m-b-0">Enter ZIP for City and State ZIP Code</p>
                                </div>
                            </div>
                            {formData.firstName}{formData.lastName}{formData.primaryPhone}{formData.zipCode}
                            <div class="form-group">
                                <label class="control-label col-md-4">
                                    &nbsp;
                                </label>
                                <div class="col-md-4">
                                    <label class="f-w-500">
                                        <input type="checkbox" name="business_address" value="1" />
                                        This is a business address
                                        <a href="#" class="m-l-5 text-muted" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="This helps us choose the best shipping method for you. Business shipments are normally delivered on weekdays by 5:00 p.m. local time. Residential shipments are normally delivered Monday - Saturday by 8:00 p.m. local time.">
                                            <i class="fa fa-question-circle"></i>
                                        </a>
                                    </label>
                                </div>
                            </div>
                           <button onClick={form_info} >
                             send_Data</button>
                             
                            <hr />
                            <div class="m-b-5"><b>Shipping Policy</b></div>
                            <ul class="checkout-info-list">
                                <li>Signature may be required for delivery</li>
                                <li>We do not ship to P.O. boxes</li>
                                <li>Delivery estimates below include item preparation and shipping time</li>
                                <li>We do not ship directly to APO/FPO addresses.</li>
                            </ul>
                        </div>
                        
                        <div class="checkout-footer">
                            <a onClick={() => history.push({
                                        pathname: `/checkOut`,
                                        search: '',
                                    })}
                             class="btn btn-white btn-lg pull-left">
                             Back</a>
                            <button 
                             onClick={() =>history.push({
                                        pathname: `/checkOut_payment`,
                                    })}
                             class="btn btn-inverse btn-lg p-l-30 p-r-30 m-l-10">
                             Continue</button>
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
export default Checkout_info
// const mapStateToProps = state => ({
//     formData: state.addItems.formData
// })

// const mapDispatchToProps = dispatch => ({
//     addForm: data => dispatch(addForm(data)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Checkout_info)