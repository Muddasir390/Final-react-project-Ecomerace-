import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCart, decrement } from '../containers/productDetail/redux/action'
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();
    const [active, setActive] = useState(true)

    const deleteCart = (id) => {
        let newArray = [...props.cartData]
        newArray.splice(id, 1)
        props.deleteCart(newArray)
    }

    const decreaseCart = (id) => {
        let newArray = [...props.cartData]
        const filterData = newArray.filter(u => u.count == id.count)
        filterData.count = filterData.count - 1
        console.log(filterData.count)
        props.decrement(newArray)
    }

    const add = () => {
        alert('added')
    }

    const logOut=()=>{
        localStorage.clear()
        history.push('/Login')
    }

    const totalItem = [...props.cartData].length

    return (
        <>
            <div id="top-nav" className="top-nav">

                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown dropdown-hover">
                                <a href="#" data-toggle="dropdown"><img src="assets/img/english.png" className="flag-img" alt="" /> English <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><img src="assets/img/english.png" className="flag-img" alt="" /> English</a></li>
                                    <li><a href="#"><img src="assets/img/german.png" className="flag-img" alt="" /> German</a></li>
                                    <li><a href="#"><img src="assets/img/spanish.png" className="flag-img" alt="" /> Spanish</a></li>
                                    <li><a href="#"><img src="assets/img/french.png" className="flag-img" alt="" /> French</a></li>
                                    <li><a href="#"><img src="assets/img/chinese.png" className="flag-img" alt="" /> Chinese</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Customer Care</a></li>
                            <li><a href="#">Order Tracker</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Our Forum</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#"><i className="fa fa-facebook f-s-14"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter f-s-14"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram f-s-14"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble f-s-14"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus f-s-14"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div id="header" className="header">

                <div className="container">

                    <div className="header-container">

                        <div className="navbar-header">
                            <button onClick={() => setActive(!active)} type="button" className="navbar-toggle collapsed">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="header-logo">
                                <a href="index.html">
                                    <span className="brand"></span>
                                    <span>Color</span>Admin
                                <small>e-commerce frontend theme</small>
                                </a>
                            </div>
                        </div>
                        {active && (
                            <>
                                <div className="header-nav">
                                    <div className=" navbar-collapse">
                                        <ul className="nav">
                                            <li className="active"><NavLink exact to="/">Home</NavLink></li>
                                            <li className="dropdown dropdown-full-width dropdown-hover">
                                                <a href="#" data-toggle="dropdown">
                                                    Our Store
                                        <i className="fa fa-angle-down"></i>
                                                    <span className="arrow top"></span>
                                                </a>

                                                <div className="dropdown-menu p-0">

                                                    <div className="dropdown-menu-container">

                                                        <div className="dropdown-menu-sidebar">
                                                            <h4 className="title">Shop By Categories</h4>
                                                            <ul className="dropdown-menu-list">
                                                                <li><NavLink exact to="/Product">Mobile Phone <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                                <li><NavLink exact to="/Product" NavLink exact to="/Product">Tablet <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                                <li><NavLink exact to="/Product">Laptop <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                                <li><NavLink exact to="/Product">Desktop <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                                <li><NavLink exact to="/Product">TV <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                                <li><NavLink exact to="/Product">Speaker <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                                <li><NavLink exact to="/Product">Gadget <i className="fa fa-angle-right pull-right"></i></NavLink></li>
                                                            </ul>
                                                        </div>

                                                        <div className="dropdown-menu-content">
                                                            <h4 className="title">Shop By Popular Phone</h4>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <ul className="dropdown-menu-list">
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 7</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 6s</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 6</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 5s</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> iPhone 5</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <ul className="dropdown-menu-list">
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy S7</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy A9</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy J3</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy Note 5</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Galaxy S7</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <ul className="dropdown-menu-list">
                                                                        <li><NavLink exact to="/productDetail" NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 730</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail" NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 735</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail" NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 830</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail" NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia 820</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail" NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Lumia Icon</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <ul className="dropdown-menu-list">
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia X</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia Z5</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia M5</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia C5</NavLink></li>
                                                                        <li><NavLink exact to="/productDetail"><i className="fa fa-fw fa-angle-right text-muted"></i> Xperia C4</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <h4 className="title">Shop By Brand</h4>
                                                            <ul className="dropdown-brand-list m-b-0">
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/apple.png" alt="" /></NavLink></li>
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/samsung.png" alt="" /></NavLink></li>
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/htc.png" alt="" /></NavLink></li>
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/microsoft.png" alt="" /></NavLink></li>
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/nokia.png" alt="" /></NavLink></li>
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/blackberry.png" alt="" /></NavLink></li>
                                                                <li><NavLink exact to="/productDetail"><img src="assets/img/sony.png" alt="" /></NavLink></li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </div>

                                            </li>
                                            <li className="dropdown dropdown-hover">
                                                <a href="#" data-toggle="dropdown">
                                                    Accessories
                                        <i className="fa fa-angle-down"></i>
                                                    <span className="arrow top"></span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink exact to="/productDetail">Mobile Phone</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">Tablet</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">TV</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">Desktop</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">Laptop</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">Speaker</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">Gadget</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink exact to="/product">New Arrival</NavLink></li>
                                            <li className="dropdown dropdown-hover">
                                                <a href="#" data-toggle="dropdown">
                                                    Pages
                                        <i className="fa fa-angle-down"></i>
                                                    <span className="arrow top"></span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink exact to="/">Home (Default)</NavLink></li>
                                                    <li><NavLink exact to="/">Home (Fixed Header)</NavLink></li>
                                                    <li><NavLink exact to="/">Home (Inverse Header)</NavLink></li>
                                                    <li><NavLink exact to="/Search">Search Results</NavLink></li>
                                                    <li><NavLink exact to="/Product">Product Page</NavLink></li>
                                                    <li><NavLink exact to="/productDetail">Product Details Page</NavLink></li>
                                                    <li><NavLink exact to="/checkOut">Checkout Cart</NavLink></li>
                                                    <li><NavLink exact to="/checkOut_info">Checkout Shipping</NavLink></li>
                                                    <li><NavLink exact to="/checkOut_payment">Checkout Payment</NavLink></li>
                                                    <li><NavLink exact to="/checkOut_complete">Checkout Complete</NavLink></li>
                                                    <li><NavLink exact to="/my_account">My Account</NavLink></li>
                                                    <li><NavLink exact to="/contact_us">Contact Us</NavLink></li>
                                                    <li><NavLink exact to="/about_us">About Us</NavLink></li>
                                                    <li><NavLink exact to="/faq">FAQ</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown dropdown-hover">
                                                <a href="#" data-toggle="dropdown">
                                                    <i className="fa fa-search search-btn"></i>
                                                    <span className="arrow top"></span>
                                                </a>
                                                <div className="dropdown-menu p-15">
                                                    <form action="search_results.html" method="POST" name="search_form">
                                                        <div className="input-group">
                                                            <input type="text" placeholder="Search" className="form-control bg-silver-lighter" />
                                                            <span className="input-group-btn">
                                                                <button className="btn btn-inverse" type="submit"><i className="fa fa-search"></i></button>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="header-nav">
                            <ul className="nav pull-right">
                                <li className="dropdown dropdown-hover">
                                    <a href="#" className="header-cart" data-toggle="dropdown">
                                        <i className="fa fa-shopping-bag"></i>
                                        <span className="total">{totalItem}</span>
                                        <span className="arrow top"></span>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-cart p-0">
                                        <div className="cart-header">
                                            <h4 className="cart-title">Shopping Bag (1) </h4>
                                        </div>
                                        <div className="cart-body">
                                            {props.cartData.map((data, id) =>
                                                <ul key={id} className="cart-item">
                                                    <li>
                                                        <div className="cart-item-image"><img src={data.image} alt="" /></div>
                                                        <div className="cart-item-info">
                                                            <h4>{data.company} - Silver</h4>
                                                            <p className="price">{data.price}</p>
                                                        </div>
                                                        <div className="cart-item-close">
                                                            <a onClick={() => deleteCart(id)} data-toggle="tooltip" data-title="Remove">&times;</a>
                                                            {data.count}
                                                        </div>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                        <div className="cart-footer">
                                            <div className="row row-space-10">
                                                <div className="col-xs-6">
                                                    <a onClick={add}
                                                        onClick={() => history.push({
                                                            pathname: `/checkOut`,
                                                            search: '',
                                                        })}
                                                        className="btn btn-default btn-block">
                                                        View Cart</a>
                                                </div>
                                                <div className="col-xs-6">
                                                    <a href="checkout_cart.html" className="btn btn-inverse btn-block">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider"></li>
                                <li>
                                         <a
                                        onClick={logOut}
                                        >
                                          Log Out</a>
                                          
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </>


    )
}
const mapStateToProps = state => ({
    cartData: state.addItems.cartData
})

const mapDispatchToProps = dispatch => ({
    deleteCart: data => dispatch(deleteCart(data)),
    decrement: data => dispatch(decrement(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
