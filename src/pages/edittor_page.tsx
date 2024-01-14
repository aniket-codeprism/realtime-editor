import React, { useState } from "react";
import Client from "../components/client";
import EditorPane from "../components/edtior_pane";

function EditorPage() {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Rakesh k" },
    { socketId: 2, userName: "Rakesh k" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img src="/logo.png" alt="logo" className="logoImage" />
          </div>
          <h3>Connected</h3>
          <div className="clientList">
            {clients.map((client) => (
              <Client userName={client.userName}></Client>
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <EditorPane></EditorPane>
      </div>
    </div>
  );
}

export default EditorPage;
