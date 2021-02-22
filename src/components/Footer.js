import React from 'react';
const Footer = () => {
    return (
        <>

            <div id="footer" className="footer">

                <div className="container">

                    <div className="row">

                        <div className="col-md-3">
                            <h4 className="footer-header">ABOUT US</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique dolor, ac efficitur velit. Nulla lobortis tempus convallis. Nulla aliquam lectus eu porta pulvinar. Mauris semper justo erat.
                        </p>
                            <p>
                                Vestibulum porttitor lorem et vestibulum pharetra. Phasellus sit amet mi congue, hendrerit mi ut, dignissim eros.
                        </p>
                        </div>

                        <div className="col-md-3">
                            <h4 className="footer-header">RELATED LINKS</h4>
                            <ul className="fa-ul">
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Shopping Help</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Terms of Use</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Contact Us</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Careers</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Payment Method</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Sales & Refund</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Sitemap</a></li>
                                <li><i className="fa fa-li fa-angle-right"></i> <a href="#">Privacy & Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-header">LATEST PRODUCT</h4>
                            <ul className="list-unstyled list-product">
                                <li>
                                    <div className="image">
                                        <img src="assets/img/iphone-6s.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="info-title">Iphone 6s</h4>
                                        <div className="price">$1200.00</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="assets/img/galaxy-s6.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="info-title">Samsung Galaxy s7</h4>
                                        <div className="price">$850.00</div>
                                    </div>
                                </li>

                                <li>
                                    <div className="image">
                                        <img src="assets/img/ipad-pro.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="info-title">Ipad Pro</h4>
                                        <div className="price">$800.00</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="assets/img/galaxy-note5.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="info-title">Samsung Galaxy Note 5</h4>
                                        <div className="price">$1200.00</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h4 className="footer-header">OUR CONTACT</h4>
                            <address>
                                <strong>Twitter, Inc.</strong><br />
                            1355 Market Street, Suite 900<br />
                            San Francisco, CA 94103<br /><br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                <abbr title="Fax">Fax:</abbr> (123) 456-7891<br />
                                <abbr title="Email">Email:</abbr> <a href="mailto:sales@myshop.com">sales@myshop.com</a><br />
                                <abbr title="Skype">Skype:</abbr> <a href="skype:myshop">myshop</a>
                            </address>
                        </div>

                    </div>

                </div>

            </div>
            <div id="footer-copyright" className="footer-copyright">

                <div className="container">
                    <div className="payment-method">
                        <img src="assets/img/payment_method.png" alt="" />
                    </div>
                    <div className="copyright">
                        Copyright &copy; 2016 SeanTheme. All rights reserved.
                </div>
                </div>
            </div>
            <div className="theme-panel">
                <a href="javascript:;" data-click="theme-panel-expand" className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
                <div className="theme-panel-content">
                    <ul className="theme-list clearfix">
                        <li><a href="javascript:;" className="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a></li>
                        <li><a href="javascript:;" className="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a></li>
                        <li className="active"><a href="javascript:;" className="bg-green" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default">&nbsp;</a></li>
                        <li><a href="javascript:;" className="bg-orange" data-theme="orange" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange">&nbsp;</a></li>
                        <li><a href="javascript:;" className="bg-red" data-theme="red" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer