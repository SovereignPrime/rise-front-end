
import { Routes, Route, Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import nirvana from "../../styles/assets/nirvana.png";
import { useState } from "react";
import {
     Button,
     Row,
     Col,
     Input,
     Card,
     CardImg,
     CardSubtitle,
     CardTitle,
     CardText,
     CardBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import img1 from '../../styles/assets/img/jessie.png';
import prod1 from '../../styles/assets/appwatch.jpg';
import prod2 from '../../styles/assets/minicooper.jpeg';
import prod3 from '../../styles/assets/ps5.jpeg';
import ProductDetails from './ProductDetails';


import "./MarketPlaceInputs.css";
import "bootstrap/dist/css/bootstrap.css";
import MarketPlacePostProduct from "./MarketPlacePostProduct";

const data = [

     {
          Id: 1,
          perName: "Eric Smith",
          perPic: img1,
          prodName: "Apple Watch",
          Category: "electronics",
          Price: 450,
          Detail: "this is a apple watch",
          prodPic: prod1,
          Good: 14,
          Bad: 2,
          Date: "2022-05-25",
     },
     {
          Id: 2,
          perName: "Eric Smith",
          perPic: img1,
          prodName: "MINI cooper",
          Category: "vehicles",
          Price: 1000,
          Detail: "this is a car",
          prodPic: prod2,
          Good: 14,
          Bad: 2,
          Date: "2022-05-22",
     },
     {
          id: 3,
          perName: "Eric Smith",
          perPic: img1,
          prodName: "PS5",
          Category: "entertainment",
          Price: 200,
          Detail: "this is a PS station",
          prodPic: prod3,
          Good: 14,
          Bad: 2,
          Date: "2021-05-27",
     },
];

const MarketPlaceInputs = () => {
     const [postProduct, setPostProduct] = useState(false);

     const addProductHandler = (newItem) => {
          data.push(newItem);
          console.log(data[1].prodPic);
          setPostProduct(false);
          console.log(data);
     };

     const closeAddProduct = () => {
          setPostProduct(false);
     };

     const [query, setQuery] = useState("");
     const [category, setCategory] = useState("all");
     const [filter, setFilter] = useState(null);
     const [thumbsup, setThumbsup] = useState();

     const searchByName = (data) => {
          return data.filter((item) => item.prodName.toLowerCase().includes(query));
     };

     const searchCate = (data) => {
          return data.filter((item) => {
               if (category === "all") {
                    return item;
               } else {
                    return item.Category === category;
               }
          });
     };

     const searchSortBy = (data) => {
          if (filter === "priceLowToHigh") {
               data = [...data].sort((a, b) =>
                    a.Price > b.Price ? 1 : a.Price < b.Price ? -1 : 0
               );
          } else if (filter === "priceHighToLow") {
               data = [...data].sort((a, b) =>
                    a.Price > b.Price ? -1 : a.Price < b.Price ? 1 : 0
               );
          } else if (filter === "Newest") {
               data = [...data].sort((a, b) =>
                    a.Date > b.Date ? -1 : b.Date < a.Date ? 1 : 0
               );
          }
          return data;
     };

     const finaldata = searchSortBy(searchByName(searchCate(data)));

     // const addThumbsUp

     return (
          <div className="marketPlace">
               <Routes>
                    <Route path="/" element={
                         <div className="d-flex">
                              <Col md={3} className="border-end">
                                   <input
                                        className="searching_bar"
                                        type="text"
                                        placeholder="searching..."
                                        onChange={(e) => setQuery(e.target.value)}
                                   />

                                   <h5>Category</h5>
                                   <select
                                        className="filter_category"
                                        onChange={(e) => setCategory(e.target.value)}
                                   >
                                        <option value="all">All Categories</option>
                                        <option value="vehicles">Vehicles</option>
                                        <option value="property-rental">Property Rental</option>
                                        <option value="apparel">Apparel</option>
                                        <option value="classifieds">Classifieds</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="family">Family</option>
                                        <option value="free stuff">Free Stuff</option>
                                        <option value="garden/outdoors">Garden & Outdoors</option>
                                        <option value="other">Other</option>
                                   </select>

                                   <h5>Filter</h5>
                                   <select
                                        className="filter_sort"
                                        onChange={(e) => setFilter(e.target.value)}
                                   >
                                        <option>Sort by</option>
                                        <option value="priceLowToHigh">Price: Low to High</option>
                                        <option value="priceHighToLow">Price: High to Low</option>
                                        <option value="Newest">Newest</option>
                                   </select>
                                   <h5>Start Selling</h5>

                                   <button
                                        onClick={() => {
                                             setPostProduct(true);
                                        }}
                                   >
                                        Post Product
                                   </button>
                              </Col>

                              {postProduct && (
                                   <MarketPlacePostProduct
                                        addItem={addProductHandler}
                                        closeAddProduct={closeAddProduct}
                                   />
                              )}

                              <Col md={9}>
                                   <div className="prod_container">
                                        <div class="row">
                                             {finaldata.map((item) => (
                                                  <div class="col-lg-4 col-md-6 col-sm-12">
                                                       <Card key={item.Id}>
                                                            <CardImg
                                                                 alt="Card image cap"
                                                                 src={item.prodPic}
                                                                 width="30%"
                                                                 height={250}
                                                                 top
                                                            />
                                                            <CardBody>
                                                                 <CardText>
                                                                      <div className="market-person">
                                                                           <img src={item.perPic} width="20%"></img>

                                                                           <small className="text-muted">
                                                                                &nbsp; {item.perName}
                                                                           </small>
                                                                           {/* <Button onClick={() => { }}>
                                                                      <FontAwesomeIcon className="iconN" icon={faThumbsUp} size="1x" transform="down-9 right-7" />
                                                                      {item.Good}
                                                                 </Button> */}

                                                                           <FontAwesomeIcon
                                                                                className="iconN"
                                                                                icon={faThumbsUp}
                                                                                size="1x"
                                                                                transform="down-9 right-7"
                                                                           />
                                                                           <span>{item.Good}</span>
                                                                           <FontAwesomeIcon
                                                                                className="iconN"
                                                                                icon={faThumbsDown}
                                                                                size="1x"
                                                                                transform="down-10 right-7"
                                                                           />
                                                                           <span>{item.Bad}</span>
                                                                      </div>
                                                                      <div className="market-product-name">{item.prodName}</div>
                                                                      <div>
                                                                           <Row md="2">
                                                                                <Col className="market-product-price">
                                                                                     ${item.Price}
                                                                                </Col>
                                                                                <Col >
                                                                                     <Link key={item.Id} to={`detail/${item.Id}`}>
                                                                                          <Button
                                                                                               size="sm">
                                                                                               Detail
                                                                                          </Button>
                                                                                     </Link>
                                                                                </Col>
                                                                           </Row>
                                                                      </div>
                                                                 </CardText>
                                                            </CardBody>
                                                       </Card>
                                                  </div>
                                             ))}

                                        </div>
                                   </div>
                              </Col>
                         </div>
                    } />
                    <Route path="detail/:Id" element={<ProductDetails />} />
               </Routes>

          </div>
     );
};

export default MarketPlaceInputs;
