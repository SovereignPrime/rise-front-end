import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import nirvana from "../../styles/assets/nirvana.png";
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardSubtitle,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

import { useState } from "react";

import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";

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
    Price: "$450",
    Detail: "this is a apple watch",
    prodPic: prod1,
    Good: 14,
    Bad: 2,
    Date: "2022-05-25",
  },
];

const MarketPlaceInputs = (props) => {
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

  return (
    <div className="marketPlace">
      <Col md={3}>
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
          <option>Sort by</option>
          <option value="price">Price</option>
          <option value="Year">Year</option>
        </select>
        <br />
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
        <div class="container">
          <div class="row">
            {data.map((item) => (
              <div class="col-3">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src={item.prodPic}
                    //src={URL.createObjectURL(item.prodPic)}

                    width="30%"
                    top
                  />
                  <CardBody>
                    <CardText>
                      <div className="market-person">
                        <img src={item.PerPic} width="20%"></img>

                        <small className="text-muted">
                          &nbsp; {item.PerName}
                        </small>
                      </div>
                      <div className="market-product-name">{item.prodName}</div>
                      <div>
                        <Row md="2">
                          <Col className="market-product-price">
                            {item.Price}
                          </Col>
                          <Col className="market-product-detail-btn">
                            <Button>Detail</Button>
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
  );
};

export default MarketPlaceInputs;
