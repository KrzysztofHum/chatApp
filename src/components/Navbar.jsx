import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">My chat app</span>
      <div className="user">
        <img src="" alt="" />
        <span>Krzychu</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
