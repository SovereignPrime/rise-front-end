import React from 'react';
import "./searchResults.scss";

import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";
import prod2 from "../../styles/assets/minicooper.jpeg";
import prod3 from "../../styles/assets/ps5.jpeg";

let results = [
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
        Date: "2021-05-27",
    },
];
const SearchResults = (props) => {
    // properties: searchTerm, setSearchTerm

    return (
        <div className="container">
            <h1>Search Results for: {props.searchTerm}</h1>
            {results.map((result, i) => {
                return (
                    <div className="result">
                        <div className="profile">
                            <img src={result.perPic} alt="profile" width="50px"/>
                            <p>{result.perName}</p>
                        </div>
                        <p className="info">{result.prodName}</p>
                        <p className="info">${result.Price}</p>
                        {/* <button text="Details" width="30px"/> */}
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults