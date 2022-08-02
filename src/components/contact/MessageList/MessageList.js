import { render } from "@testing-library/react";
import React from "react";
import ContentMe from "./ContentMe";
import ContentOpp from "./ContentOpponent";

const DUMMY_DATA = [
  {
    senderId: "Brooke",
    text: "Hey, How is it going",
  },
  {
    senderId: "Me",
    text: "Great, How about you?",
  },
  {
    senderId: "Brooke",
    text: "Good to hear, I am great as well",
  },
];

function Message(props) {
  if (props.senderId == "Me") {
    return <ContentMe text={props.text} senderId={props.senderId} />
  }
  else {
    return <ContentOpp text={props.text} senderId={props.senderId} />
  }
}

class MessageList extends React.Component {
  render() {
    //console.log(DUMMY_DATA);
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              {/* <div className="message-username">{message.senderId}</div> */}
              <Message text={message.text} senderId={message.senderId} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
