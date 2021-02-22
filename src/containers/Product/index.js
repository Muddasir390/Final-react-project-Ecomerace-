import React, { useEffect, useState } from 'react';
import { Next } from 'react-bootstrap/esm/PageItem';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { productData, sortData } from './constants';
import Pagination from './pagination';

const Product = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const [showData, setShowData] = useState([])
    const [searchMobile, setSearchMobile] = useState('')
    const [startPrice, setStartPrice] = useState('')
    const [endPrice, setEndPrice] = useState('')
    const [naxtPage, setNextPage] = useState(1)
    useEffect(() => {
        setShowData(productData);
    }, []);

    const paginate = (pageNumber) => {
        setNextPage(pageNumber)
        setCurrentPage(pageNumber)

    }
    const nextPage = () => {
        var next=naxtPage+1
        setCurrentPage(next)
        setNextPage(naxtPage + 1)
    }

    const prePage = () => {
        var pre=naxtPage-1
        setCurrentPage(pre)
        setNextPage(naxtPage - 1)
    }
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPost = showData.slice(indexOfFirstPost, indexOfLastPost)
    // setShowData(currentPost)
    // const popular=(data)=>{
    //     if(data==="popular")
    //   { 
    //      const popular=productData.filter(u=>u.popular)
    //     setShowData(popular)
    // }
    // else if(data==="New_Arrival"){
    //     const popular=productData.filter(u=>u.New_Arrival)
    //     setShowData(popular)
    // }
    // else if(data==="Discount"){
    //     const popular=productData.filter(u=>u.discount)
    //     setShowData(popular)
    // }
    // else if(data==="Show All"){

    //     setShowData(productData)
    // }

    // }
    const sort = (data) => {
        if (data === "Discount") {
            const filterDiscount = showData.sort(function (a, b) { return a.discount - b.discount })
            setShowData([...filterDiscount])
        }
        else if (data === "rating") {
            const filterDiscount = showData.sort(function (a, b) { return b.rating - a.rating })
            setShowData([...filterDiscount])
        }
    }

    const filterMobile = (e) => {
        e.preventDefault();
        const filterPrice = productData.filter
            (u => (u.price >= startPrice && u.price <= endPrice)
                && u.company.toLocaleLowerCase().includes(searchMobile.toLocaleLowerCase())
            )
        setShowData(filterPrice)

    }
    const resetData = () => {
        setStartPrice('')
        setEndPrice('')
        setSearchMobile('')
        setShowData(productData)
    }
    const samsung = showData.filter(u => u.company === "samsung").length
    const IPHONE = showData.filter(u => u.company === "IPHONE").length
    const Nokia = showData.filter(u => u.company === "Nokia").length
    const Huwawi = showData.filter(u => u.company === "Huwawi").length
    const DIGIT = showData.filter(u => u.company === "DIGIT").length
    const Infinx = showData.filter(u => u.company === "Infinx").length




    return (
        <>
            <Header />


            <div id="page-header" className="section-container page-header-container bg-black">

                <div className="page-header-cover">
                    <img src="assets/img/apple-cover.jpg" alt="" />
                </div>

                <div className="container">
                    <h1 className="page-header"><b>Apple</b> Product</h1>
                </div>

            </div>

            <div id="search-results" className="section-container bg-silver">

                <div className="container">

                    <div className="search-container">

                        <div className="search-content">

                            <div className="search-toolbar">

                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>We found 65 Items for "Apple Product"</h4>
                                    </div>

                                    <div className="col-md-6 text-right">
                                        <ul className="sort-list">
                                            <li className="text"><i className="fa fa-filter"></i> Sort by:</li>
                                            {sortData.map((data, i) =>
                                                <li key={i} onClick={() => sort(data)}>{data}</li>
                                            )}
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="search-item-container">

                                <div className="item-row">
                                    {currentPost.map((data, i) =>
                                        <div className="item item-thumbnail">
                                            <a href="product-detail.html" key={i} className="item-image">
                                                <img src={data.image} />
                                                <div className="discount">{data.discount}% OFF</div>
                                            </a>
                                            <div className="item-info">
                                                <h4 className="item-title">
                                                    <a href="product-detail.html">{data.company}<br />16GB</a>
                                                </h4>
                                                <p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
                                                <div className="item-price">{data.price}</div>
                                                <div className="item-discount-price">$739.00</div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className="text-center">
                            <a onClick={()=>nextPage()} className="page-link">next</a>
                                <Pagination postsPerPage={postsPerPage} totalPosts={showData.length}
                                    paginate={paginate} 
                                />
                                 {currentPage===5 && (<a onClick={()=>prePage()} className="page-link">Previous</a>)}
                            </div>
                        </div>

                        <div className="search-sidebar">
                            <h4 className="title">Filter By</h4>
                            <form name="filter_form">
                                <div className="form-group">
                                    <label className="control-label">Keywords</label>
                                    <input type="text" className="form-control input-sm"
                                        onChange={(e) => setSearchMobile(e.target.value)}
                                        placeholder="Enter Mobile Brand"
                                        value={searchMobile}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Price</label>
                                    <div className="row row-space-0">
                                        <div className="col-md-5">
                                            <input type="number" className="form-control input-sm"
                                                onChange={(e) => setStartPrice(e.target.value)} placeholder="strat"
                                                value={startPrice}
                                            />
                                        </div>
                                        <div className="col-md-2 text-center p-t-5 f-s-12 text-muted">to</div>
                                        <div className="col-md-5">
                                            <input type="number" className="form-control input-sm"
                                                onChange={(e) => setEndPrice(e.target.value)}
                                                placeholder="end" value={endPrice} />
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-30">
                                    <button
                                        onClick={filterMobile}
                                        className="btn btn-sm btn-inverse">
                                        <i className="fa fa-search"></i> Filter</button>
                                        &nbsp; &nbsp;
                                        {
                                        (startPrice || endPrice || searchMobile) &&
                                        <i class="fa fa-window-close" style={{ fontSize: '25px' }} onClick={resetData} aria-hidden="true"></i>
                                    }

                                </div>

                            </form>

                            <h4 className="title m-b-0">Categories</h4>
                            <ul className="search-category-list">
                                <li><a href="#">Samsung <span className="pull-right">({samsung})</span></a></li>
                                <li><a href="#">IPHONE <span className="pull-right">({IPHONE})</span></a></li>
                                <li><a href="#">Nokia <span className="pull-right">({Nokia})</span></a></li>
                                <li><a href="#">Huwawi <span className="pull-right">({Huwawi})</span></a></li>
                                <li><a href="#">DIGIT <span className="pull-right">({DIGIT})</span></a></li>
                                <li><a href="#">Infinx <span className="pull-right">({Infinx})</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Product