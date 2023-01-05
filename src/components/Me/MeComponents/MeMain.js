import React, { useState, useRef } from "react";
import EditProfile from "./EditProfile";
import EditMarketPlaceItems from "./EditMarketPlaceItems";

import { LightButton } from "../../Buttons";

const MeMain = () => {
  //user data should be a user's personal information and the user's marketplace posts
  const [itemSearch, setItemSearch] = useState("");
  const [DUMMY_USER_DATA, setDUMMY_USER_DATA] = useState({
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    height: 160,
    address: "Wellington St, Ottawa, ON K1A 0A9",
    occupation: "Sound Technician",
    sex: "Female",
    bio: "I work at the parliament building.",
    selfie: (
      <img src="http://localhost:3000/static/media/brooke.81587ebc7f34e3b6c003.png" />
    ),
    marketPlacePosts: [
      {
        productName: "Apple Watch",
        category: "Electronics",
        price: 450,
        details: "An Apple Watch that has been used once",
        thumbnail:
          "http://localhost:3000/static/media/appwatch.30e581aa214e694b9a84.jpg",
        files: [],
        productId: "x001", //some form of unique identifier is recommended
      },
      {
        productName: "MINI Cooper",
        category: "Vehicles",
        price: 1000,
        details: "100 miles on it. Needs an oil change",
        thumbnail:
          "http://localhost:3000/static/media/minicooper.a71528b9f42d65af1958.jpeg", //this should just be first image found in files

        files: [
          "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
          "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
          "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        ], //only supports image files at the moment
        productId: "x002",
      },
    ],
    nirvanaAmount: 500,
  });

  const [itemToEdit, setItemToEdit] = useState(); //should be the object itself, not an index or equivalent pointer

  const editItem = (id, obj) => {
    console.log("item has been edited, check this out please");
    let tempData = DUMMY_USER_DATA;

    for (let i in DUMMY_USER_DATA.marketPlacePosts) {
      if (tempData.marketPlacePosts[i].productId == id) {
        tempData.marketPlacePosts[i] = obj;
        setItemToEdit(tempData.marketPlacePosts[i]); //causes a re-render
      }
    }
    setDUMMY_USER_DATA(tempData);
    //some function should run to tell the rest of the site that you have changed your item

    //id should be used to locate objectToChange in array, and then replace that objectToChange with obj
  };

  var marketPlacePostsDisplay = DUMMY_USER_DATA.marketPlacePosts.map((post) => {
    if (post.productName.toUpperCase().includes(itemSearch.toUpperCase())) {
      return (
        <div key={post.productId}>
          <p style={{ float: "left" }}>{post.productName}</p>
          <img
            src={post.thumbnail}
            style={{ width: "20%", float: "left" }}
            onClick={() => {
              setItemToEdit(
                DUMMY_USER_DATA.marketPlacePosts
                  .filter((item) => {
                    return item.productId === post.productId;
                  })
                  .pop()
                //without .pop() it returns [{...}]
              );

              //setShowEditItem(!showEditItem); //should only toggle if it is the same product, and should just setItemToEdit new object if it's a different product
              setShowEditItem(true);
            }}
          />
          {/*
        Each image should onClick lead to their page or to a page to edit it on
        */}
        </div>
      );
    }
  });

  marketPlacePostsDisplay = marketPlacePostsDisplay.filter(function (item) {
    return item !== undefined;
  });

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);

  const handleModalToggle = () => {
    setShowEditProfile(!showEditProfile);
    //call this in EditProfile without parameters to close modal
  };

  const handleItemModalToggle = () => {
    setShowEditItem(!showEditItem);
    //call this in EditProfile without parameters to close modal
  };

  const editProfile = (newAddress, newOccupation, newBio, newSelfie) => {
    var tempProfile = DUMMY_USER_DATA;
    tempProfile.address = newAddress;
    tempProfile.occupation = newOccupation;
    tempProfile.bio = newBio;
    if (newSelfie !== null) {
      tempProfile.selfie = (
        <img
          src={newSelfie}
          //style={{ borderRadius: "50%", clipPath: "circle()" }}
          //makes the new selfie shown as a circle, like many social medias' thumbnails for profile pictures
        />
      );
    }
    setDUMMY_USER_DATA(tempProfile);
  };

  return (
    <div>
      {DUMMY_USER_DATA.selfie}
      <span>
        {DUMMY_USER_DATA.firstName} {DUMMY_USER_DATA.lastName}{" "}
        <LightButton onClick={handleModalToggle}>Edit Profile</LightButton>
        {/*Above onClick makes the EditProfile.js program visible */}
        <br></br>
        <b>{DUMMY_USER_DATA.nirvanaAmount}</b> nirvana
      </span>

      <h4>Your Market Place Items</h4>
      <label>Search</label>
      <input
        onChange={(e) => {
          setItemSearch(e.target.value);
        }}
      />

      {marketPlacePostsDisplay.length > 0 ? (
        marketPlacePostsDisplay
      ) : (
        <p>No Items Found</p>
      )}

      <LightButton>Click an item to edit it</LightButton>
      {/* not yet implemented */}
      {showEditProfile && (
        <EditProfile
          handleModalToggle={handleModalToggle}
          currentAddress={DUMMY_USER_DATA.address}
          currentOccupation={DUMMY_USER_DATA.occupation}
          currentBio={DUMMY_USER_DATA.bio}
          editProfile={editProfile}
        />
      )}
      {showEditItem && (
        <EditMarketPlaceItems
          item={itemToEdit}
          editItem={editItem}
          handleModalToggle={handleItemModalToggle}
        />
      )}
    </div>
  );
};

export default MeMain;
