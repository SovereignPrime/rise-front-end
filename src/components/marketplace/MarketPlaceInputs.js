import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import nirvana from '../../styles/assets/nirvana.png';
import { Button, Row, Col, Container, Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody } from "reactstrap";

import img1 from '../../styles/assets/img/jessie.png';
import prod1 from '../../styles/assets/appwatch.jpg';

import './MarketPlaceInputs.css';

const data = [
     {
          PerName: "Eric Smith",
          PerPic: img1,
          prodName: "Apple Watch",
          Price: "$450",
          Detail: "this is a apple watch",
          prodPic: prod1,
          good: 14,
          bad: 2

     },
     {
          PerName: "Eric Smith",
          PerPic: img1,
          prodName: "Apple Watch",
          Price: "$450",
          Detail: "this is a apple watch",
          prodPic: prod1,
          good: 14,
          bad: 2

     }
];

const MarketPlaceInputs = () => {
     return (
          <div className='marketPlace'>
               <Row>
                    <Col md={6}>
                         <h3>category</h3>
                         <select>
                              <option>All Categories</option>
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


                         <select>
                              <option >Sort by</option>
                              <option value="price">Price</option>
                              <option value="Year">Year</option>

                         </select>


                    </Col>
                    <Col md={6}>
                         <h3>product</h3>
                         {/* <div className='test'>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>
                              <div >
                                   <img src={img1}></img>
                              </div>

                         </div> */}


                         <div className='card'>
                              {
                                   data.map(item => (
                                        <Card className='cardItem'>
                                             <CardImg
                                                  alt="Card image cap"
                                                  src={item.prodPic}
                                                  width="80%"
                                                  top
                                             />
                                             <CardBody >
                                                  <CardText >
                                                       <div className="market-person">
                                                            <img src={item.PerPic} width="20%"></img>

                                                            <small className="text-muted">
                                                                 &nbsp; {item.PerName}
                                                            </small>
                                                       </div>


                                                       <div className='market-product-name'>
                                                            {item.prodName}
                                                       </div>
                                                       <div >

                                                            <Row md="2">
                                                                 <Col className='market-product-price'>
                                                                      {item.Price}
                                                                 </Col>
                                                                 <Col className='market-product-detail-btn'>
                                                                      <Button >
                                                                           Detail
                                                                      </Button>
                                                                 </Col></Row>
                                                       </div>
                                                  </CardText >
                                             </CardBody>
                                        </Card>
                                   ))
                              }
                         </div>
                    </Col>
               </Row>
          </div>

     );

}

export default MarketPlaceInputs;

