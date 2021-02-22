import React, { useState } from 'react';
import Header from '../../components/Header';
import Carasole from '../../components/Carasole';
import Footer from '../../components/Footer';
import { data } from './constants';
import { useHistory } from 'react-router-dom';
import { mobileBrands, Mobile,tabletBrands,Tablet} from './constants';

const Index = (props) => {
    console.log('props',props)
    const history = useHistory();
    const [start, setStart] = useState(0)
    const [stop, setStop] = useState(6)
    const [mobile, setMobile] = useState(Mobile)
    const [tablet, setTablet] = useState(Tablet)
    const Next = () => {
        setStart(start + 6)
        setStop(stop + 6)
    }
    const Back = () => {
        setStart(start - 6)
        setStop(stop - 6)
    }
    const filterMobileBrand = (brand) => {
        const filterData = Mobile.filter(u => u.company === brand)
        if(brand==="SHOW ALL")
        {
            setMobile(Mobile)
        }else{
            setMobile(filterData)
        }

    }

    const filterTablet = (brand) =>{

        const filterData= Tablet.filter(u => u.company === brand)
        if(brand==="SHOW ALL"){
            setTablet(Tablet)
        }
        else{
            setTablet(filterData)
        }
        
    }

    return (
        <>

            <Header />
            <Carasole />
            <div>

                <div id="promotions" class="section-container bg-white">

                    <div class="container">

                        <h4 class="section-title clearfix">
                            <a href="#" class="pull-right">SHOW ALL</a>
                    Exclusive promotions
                    <small>from 25 September 2016 - 1 January 2017</small>
                        </h4>

                        <div class="row row-space-10">

                            <div class="col-md-6">

                                <div class="promotion promotion-lg bg-black-darker">
                                    <div class="promotion-image text-right promotion-image-overflow-bottom">
                                        <img src="assets/img/iphone-se.png" alt="" />
                                    </div>
                                    <div class="promotion-caption promotion-caption-inverse">
                                        <h4 class="promotion-title">iPhone SE</h4>
                                        <div class="promotion-price"><small>from</small> $299.00</div>
                                        <p class="promotion-desc">A big step for small.<br />A beloved design. Now with more to love.</p>
                                        <a href="#" class="promotion-btn">View More</a>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-3 col-sm-6">

                                <div class="promotion bg-blue">
                                    <div class="promotion-image promotion-image-overflow-bottom promotion-image-overflow-top">
                                        <img src="assets/img/apple-watch-sm.png" alt="" />
                                    </div>
                                    <div class="promotion-caption promotion-caption-inverse text-right">
                                        <h4 class="promotion-title">Apple Watch</h4>
                                        <div class="promotion-price"><small>from</small> $299.00</div>
                                        <p class="promotion-desc">You. At a glance.</p>
                                        <a href="#" class="promotion-btn">View More</a>
                                    </div>
                                </div>

                                <div class="promotion bg-silver">
                                    <div class="promotion-image text-center promotion-image-overflow-bottom">
                                        <img src="assets/img/mac-mini.png" alt="" />
                                    </div>
                                    <div class="promotion-caption text-center">
                                        <h4 class="promotion-title">Mac Mini</h4>
                                        <div class="promotion-price"><small>from</small> $199.00</div>
                                        <p class="promotion-desc">It’s mini in a massive way.</p>
                                        <a href="#" class="promotion-btn">View More</a>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-3 col-sm-6">

                                <div class="promotion bg-silver">
                                    <div class="promotion-image promotion-image-overflow-right promotion-image-overflow-bottom text-right">
                                        <img src="assets/img/mac-accessories.png" alt="" />
                                    </div>
                                    <div class="promotion-caption text-center">
                                        <h4 class="promotion-title">Apple Accessories</h4>
                                        <div class="promotion-price"><small>from</small> $99.00</div>
                                        <p class="promotion-desc">Redesigned. Rechargeable. Remarkable.</p>
                                        <a href="#" class="promotion-btn">View More</a>
                                    </div>
                                </div>

                                <div class="promotion bg-black">
                                    <div class="promotion-image text-right">
                                        <img src="assets/img/mac-pro.png" alt="" />
                                    </div>
                                    <div class="promotion-caption promotion-caption-inverse">
                                        <h4 class="promotion-title">Mac Pro</h4>
                                        <div class="promotion-price"><small>from</small> $1,299.00</div>
                                        <p class="promotion-desc">Built for creativity on an epic scale.</p>
                                        <a href="#" class="promotion-btn">View More</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div id="trending-items" class="section-container bg-silver">
                    <div class="container">
                        <h4 class="section-title clearfix">


                            {(start === 0 || start === 6) && (
                                <a class="pull-right m-l-5" onClick={() => Next()}><i class="fa fa-angle-right f-s-18"></i></a>
                            )}

                            {(stop === 12 || stop === 18) && (
                                <a class="pull-right" onClick={() => Back()}><i class="fa fa-angle-left f-s-18"></i></a>

                            )}

                    Trending Items
                    <small>Shop and get your favourite items at amazing prices!</small>
                        </h4>
                        <div class="row row-space-10">
                            {data.slice(start, stop).map((data,i) => (
                                <div class="col-md-2 col-sm-4">
                                    <div class="item item-thumbnail">
                                        <a style={{cursor : 'pointer'}} href="product_detail.html" key={i} class="item-image">
                                            {/* <img src="assets/img/macbook-pro.png" alt="" /> */}
                                            <img src={data.image} />
                                            <div class="discount">{data.company}</div>
                                        </a>
                                        <div class="item-info">
                                            <h4 class="item-title">
                                                <a href="product.html">{data.price}<br />with Retina Display</a>
                                            </h4>
                                            <p class="item-desc">Stunning Retina Display</p>
                                            <div class="item-price">{data.company}</div>
                                            <div class="item-discount-price">$1499.00</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>

                </div>
                {/* {data.splice(6)} */}
                {/* main data start from here */}


                <div id="mobile-list" class="section-container bg-silver p-t-0">
                    <div class="container">

                        <h4 class="section-title clearfix">
                            <a href="#" class="pull-right">SHOW ALL</a>
                    Mobile Phones
                    <small>Shop and get your favourite phone at amazing prices!</small>
                        </h4>

                        <div class="category-container">

                            <div class="category-sidebar">
                                <ul class="category-list">

                                    <li class="list-header">Top Categories</li>
                                    {mobileBrands.map((data,i) =>
                                        <li style={{cursor : 'pointer'}}  key={i} onClick={() => filterMobileBrand(data)}>{data}</li>
                                    )}
                                </ul>
                            </div>
                            <div class="category-detail">
                                <a href="#" class="category-item full">
                                    <div class="item">
                                        <div class="item-cover">
                                            <img src="assets/img/samsung-s7-edge.jpg" alt="" />
                                        </div>
                                        <div class="item-info bottom">
                                            <h4 class="item-title">Samsung Galaxy s7 Edge + Geat 360 + Gear VR</h4>
                                            <p class="item-desc">Redefine what a phone can do</p>
                                            <div class="item-price">$799.00</div>
                                        </div>
                                    </div>
                                </a>
                                

                                <div class="category-item list">

                                    <div class="item-row">
                                        {mobile.map((data,i) =>
                                            <div class="item item-thumbnail">
                                                <i style={{cursor : 'pointer'}}  onClick={()=>history.push({
                                                 pathname: `/ProductDetail`,
                                                  search:'',
                                                  state: { detail: data } 
                                                })} key={i} class="item-image">
                                                    <img src={data.image} />
                                                </i>
                                                <div class="item-info">
                                                    <h4 class="item-title">
                                                        <a href="">{data.company}<br />16GB</a>
                                                    </h4>
                                                    <p class="item-desc">3D Touch. 12MP photos. 4K video.</p>
                                                    <div class="item-price">{data.price}</div>
                                                    <div class="item-discount-price">$739.00</div>
                                                </div>
                                            </div>
                                        )}




                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div id="tablet-list" class="section-container bg-silver p-t-0">

                    <div class="container">

                        <h4 class="section-title clearfix">
                            <a href="#" class="pull-right">SHOW ALL</a>
                    Tablet
                    <small>Shop and get your favourite tablet at amazing prices!</small>
                        </h4>

                        <div class="category-container">

                            <div class="category-sidebar">
                                <ul class="category-list">
                                    <li class="list-header">Top Categories</li>
                                    {tabletBrands.map((data,i)=>
                                        <li style={{cursor : 'pointer'}}  key={i} onClick={()=>filterTablet(data)}>{data}</li>
                                    )}
                                    
                                    
                                </ul>
                            </div>

                            <div class="category-detail">

                                <a href="#" class="category-item full">
                                    <div class="item">
                                        <div class="item-cover">
                                            <img src="assets/img/huawei-mediapad.jpg" alt="" />
                                        </div>
                                        <div class="item-info bottom">
                                            <h4 class="item-title">Huawei MediaPad T1 7.0</h4>
                                            <p class="item-desc">Vibrant colors. Beautifully displayed</p>
                                            <div class="item-price">$299.00</div>
                                        </div>
                                    </div>
                                </a>

                                <div class="category-item list">

                                    <div class="item-row">
                                        {tablet.map((data,i)=>
                                    <div   class="item item-thumbnail">
                                    <i style={{cursor : 'pointer'}}  onClick={()=>history.push({
                                                 pathname: `/ProductDetail`,
                                                  search:'',
                                                  state: { detail: data } 
                                                })} key={i} class="item-image">
                                                    <img src={data.image} />
                                                </i>
                                    <div class="item-info">
                                        <h4 class="item-title">
                                            <a href="">{data.company}<br />16GB</a>
                                        </h4>
                                        <p class="item-desc">3D Touch. 12MP photos. 4K video.</p>
                                        <div class="item-price">{data.price}</div>
                                        <div class="item-discount-price">$739.00</div>
                                    </div>
                                </div>
                                            )}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div id="policy" class="section-container p-t-30 p-b-30">

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



                <div id="subscribe" class="section-container bg-silver p-t-30 p-b-30">

                    <div class="container">

                        <div class="row">

                            <div class="col-md-6 col-sm-6">

                                <div class="subscription">
                                    <div class="subscription-intro">
                                        <h4> LET'S STAY IN TOUCH</h4>
                                        <p>Get updates on sales specials and more</p>
                                    </div>
                                    <div class="subscription-form">
                                        <form name="subscription_form" action="index.html" method="POST">
                                            <div class="input-group">
                                                <input type="text" class="form-control" name="email" placeholder="Enter Email Address" />
                                                <div class="input-group-btn">
                                                    <button type="submit" class="btn btn-inverse"><i class="fa fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 col-sm-6">

                                <div class="social">
                                    <div class="social-intro">
                                        <h4>FOLLOW US</h4>
                                        <p>We want to hear from you!</p>
                                    </div>
                                    <div class="social-list">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-dribbble"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                    </div>
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
export default Index