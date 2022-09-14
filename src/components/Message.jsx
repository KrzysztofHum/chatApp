import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { ChatContext } from "../context/ChatContext.js";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoUrl
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.file && <img src={message.file} alt="" />}
      </div>
    </div>
  );
}

export default Message;
