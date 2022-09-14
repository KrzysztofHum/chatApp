import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { ChatContext } from "../context/ChatContext.js";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Message;
