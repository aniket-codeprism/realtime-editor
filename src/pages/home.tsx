import { log } from "console";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (e: any) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Room id Created");
  };
  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room id or User Name invalid");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };
  const handleInputEnter = (e: any) => {
    if (e.code === "Enter") joinRoom();
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/logo.png" alt="logo" className="homePageLogo" />
        <h4 className="mainLabel">Paste invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className="btn joinBtn">
            Join
          </button>
          <span className="createInfo">
            If you dont have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with Love by &nbsp;
          <a href="https://www.linkedin.com/in/tinku6/">Aniket</a>
        </h4>
      </footer>
    </div>
  );
}

export default HomePage;
