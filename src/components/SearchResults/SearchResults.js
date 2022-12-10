import React from 'react';
import "./searchResults.scss";

import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";
import prod2 from "../../styles/assets/minicooper.jpeg";
import prod3 from "../../styles/assets/ps5.jpeg";
import { isConstructorDeclaration } from 'typescript';

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

// Search algorithm approximation for misspellings
const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
       track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
       track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
       for (let i = 1; i <= str1.length; i += 1) {
          const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
          track[j][i] = Math.min(
             track[j][i - 1] + 1, // deletion
             track[j - 1][i] + 1, // insertion
             track[j - 1][i - 1] + indicator, // substitution
          );
       }
    }
    return track[str2.length][str1.length];
  };

const SearchResults = (props) => {
    // properties: searchTerm, setSearchTerm

    return (
        <div className="container">
            <h1>Search Results for: {props.searchTerm}</h1>
            {results.filter(item => {
                const distance = levenshteinDistance(item.prodName.toLowerCase(), props.searchTerm);
                console.log("Distance: " + distance);
                return distance <= 3;
            })
            .map((result, i) => {
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