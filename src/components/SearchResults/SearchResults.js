import React from 'react';
import CardObject from '../Card/CardObject';
import "./searchResults.scss";
import { useSelector } from 'react-redux';

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
    // properties: searchTerm, shoppingItems
	const shoppingItems = useSelector((state) => state.marketItem.marketItems);

    // Filter search
    const filteredShoppingItems = shoppingItems.filter(item => {
        /* For each word of the item */
        const itemName = item.prodName.toLowerCase();
        const searchTerm = props.searchTerm.toLowerCase();
        const words = itemName.split(' ');
        let matches1Word = false;

        /* If the search term approximates the entire word */
        matches1Word = levenshteinDistance(itemName, searchTerm) <= 3;
        console.log(itemName, searchTerm);
        console.log(matches1Word);

        /* If the search term approximately matches any word of the current item, return true */
        if (!matches1Word){
            words.forEach((word, i) => {
                console.log("Word: " + word, "i: " + i);
                const distance = levenshteinDistance(word, searchTerm);
                if (distance <= 3) {
                    matches1Word = true;
                }
            })
        }

        return matches1Word
    })

    return (
        <div className="container">
            <h1>Search Results for: {props.searchTerm}</h1>

            {/* Display Results */}
            <CardObject param={filteredShoppingItems}></CardObject>
        </div>
    )
}

export default SearchResults