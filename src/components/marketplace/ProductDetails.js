
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Row, Col, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, CardText, CardBody } from "reactstrap";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faBookmark, faShare, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import './MarketPlaceInputs.css';
import "bootstrap/dist/css/bootstrap.css";
import img1 from '../../styles/assets/img/jessie.png';
import prod1 from '../../styles/assets/appwatch.jpg';
import prod2 from '../../styles/assets/minicooper.jpeg';
import prod3 from '../../styles/assets/ps5.jpeg';

const data = [
    {
        Id: 1,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "Apple Watch",
        Category: "electronics",
        Price: 450,
        Detail: "This is a brand new apple Watch. I used it onece, but then found I do not  need it. I is in very good condition",
        prodPic: prod1,
        Good: 14,
        Bad: 2,
        Date: "2022-05-25"
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
        Date: "2022-05-22"

    },
    {
        Id: 3,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "PS5",
        Category: "entertainment",
        Price: 200,
        Detail: "this is a PS station",
        prodPic: prod3,
        Good: 14,
        Bad: 2,
        Date: "2021-05-27"

    },

];

const ProductDetails = () => {

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);

    // State for Animation
    const [animating, setAnimating] = React.useState(false);

    // Sample items for Carousel
    const item1 =
    {
        src: prod1,
        altText: 'Slide One'
    };
    const items = [item1];

    // Items array length
    const itemLength = items.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }


    const para = useParams();
    const navigate = useNavigate();
    console.log(para.Id);
    // console.log(data);


    const good = (data) => {
        return data.filter((item) => {
            return item.Id == para.Id
        }
        );
    }

    const finaldata = good(data);

    //必须用map
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <div className="background" style={{ backgroundImage: `url(${item.src})` }} >
                </div>
                <div className='photo'>
                    <img src={item.src} width="135%" />
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className='d-flex'>


            {
                finaldata.map((item) => (
                    <div className='d-flex'>

                        <Col md={4}>
                            <Button onClick={() => navigate(-1)}>
                                return
                            </Button>

                            <Button >
                                <FontAwesomeIcon icon={faBookmark} />
                            </Button>
                            <Button >
                                <FontAwesomeIcon icon={faShare} />
                            </Button>
                            <Button >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </Button>
                            <div>{item.prodName}</div>
                            <div>$ {item.Price}</div>
                            <div className="market-person">
                                <img src={item.perPic} width="20%"></img>
                                <small className="text-muted">
                                    &nbsp; {item.perName}
                                </small>
                                <FontAwesomeIcon className="iconN" icon={faThumbsUp} size="1x" transform="down-9 right-7" />
                                <span>{item.Good}</span>
                                <FontAwesomeIcon className="iconN" icon={faThumbsDown} size="1x" transform="down-10 right-7" />
                                <span>{item.Bad}</span>
                            </div>
                            <div>Detail</div>
                            <div>{item.Detail}</div>


                            <Button >
                                Message Seller
                            </Button>

                        </Col>

                        <Col md={8} style={{ marginLeft: "40px" }} >

                            <div >
                                <Carousel previous={previousButton} next={nextButton} activeIndex={activeIndex}>
                                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={(newIndex) => {
                                        if (animating) return;
                                        setActiveIndex(newIndex);
                                    }} />
                                    {carouselItemData}
                                    <CarouselControl directionText="Prev"
                                        direction="prev" onClickHandler={previousButton} />
                                    <CarouselControl directionText="Next"
                                        direction="next" onClickHandler={nextButton} />
                                </Carousel>
                            </div >

                        </Col>
                    </div >

                ))
            }


        </div >

    )
}

export default ProductDetails