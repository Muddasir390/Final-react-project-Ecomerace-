import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { decrement } from '../productDetail/redux/action';
import { useHistory } from 'react-router-dom';

const CheckOut = (props) => {
    const history = useHistory();
    var total = 0;
    var total1 = 0;
    var total2 = 0;
    const decrement = (data) => {
        let newArray = [...props.cartData]
        data.count = data.count - 1
        props.decrement(newArray)
    }

    const increment = (data) => {
        let newArray = [...props.cartData]
        data.count = data.count + 1
        props.decrement(newArray)
    }
    return (
        <>
            <Header />
            <div class="section-container" id="checkout-cart">

                <div class="container">

                    <div class="checkout">
                        <form name="form_checkout">

                            <div class="checkout-header">

                                <div class="row">

                                    <div class="col-md-3 col-sm-3">
                                        <div class="step active">
                                            <a href="#">
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
                                <div class="table-responsive">
                                    <table class="table table-cart">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th class="text-center">Price</th>
                                                <th class="text-center">Quantity</th>
                                                <th class="text-center">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {props.cartData.map((data, id) =>
                                                <tr key={id}>
                                                    <td class="cart-product">
                                                        <div class="product-img">
                                                            <img src={data.image} />
                                                        </div>
                                                        <div class="product-info">
                                                            <div class="title">{data.company} (Silver)</div>
                                                            <div class="desc">Delivers Tue 26/04/2016 - Free</div>
                                                        </div>
                                                    </td>
                                                    <td class="cart-price text-center">{data.price}</td>
                                                    <td class="cart-qty text-center">
                                                        <div class="cart-qty-input">
                                                            <a onClick={() => decrement(data)} class="qty-control left disabled" data-click="decrease-qty" data-target="#qty"><i class="fa fa-minus"></i></a>
                                                            <input type="text" name="qty" value={data.count} class="form-control" id="qty" />
                                                            <a onClick={() => increment(data)} class="qty-control right disabled" data-click="increase-qty" data-target="#qty"><i class="fa fa-plus"></i></a>
                                                        </div>
                                                        <div class="qty-desc">1 to max order</div>
                                                    </td>
                                                    <td class="cart-total text-center">

                                                        {data.price * data.count}
                                                    </td>

                                                </tr>
                                            )}
                                            <tr>
                                                <td class="cart-summary" colspan="4">

                                                    <div class="summary-container">
                                                        <div class="summary-row">
                                                            <div class="field">Cart Subtotal</div>
                                                            {props.cartData.map((data) =>
                                                            <>
                                                                <div class="value" style={{display:'none'}}>{total=data.price*data.count}
                                                                <br/>
                                                                </div>
                                                                <div>
                                                                {total1=total+total1}                                                                      
                                                                </div>
                                                               </> 
                                                            )}

                                                        </div>
                                                        <div class="summary-row text-danger">
                                                            <div class="field">Free Shipping</div>
                                                            <div class="value">$0.00</div>
                                                        </div>
                                                        <div class="summary-row total">
                                                            <div class="field">Total</div>
                                                            <div class="value">{total1}</div>
                                                        </div>
                                                    </div>

                                                </td>

                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                            <div class="checkout-footer">
                                <a onClick={() => history.push({
                                        pathname: `/`,
                                        search: '',
                                    })}
                                    class="btn btn-white btn-lg pull-left">Continue Shopping
                             </a>
                                <button onClick={() => history.push({
                                        pathname: `/checkOut_info`,
                                        search: '',
                                    })}
                                 class="btn btn-inverse btn-lg p-l-30 p-r-30 m-l-10">
                                 Checkout</button>
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

            <Footer />
        </>
    )
}
const mapStateToProps = state => ({
    cartData: state.addItems.cartData
})

const mapDispatchToProps = dispatch => ({
    decrement: data => dispatch(decrement(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)