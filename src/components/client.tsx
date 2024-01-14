import React from "react";
import Avatar from "react-avatar";
const Client = (client: any) => {
  return (
    <div className="client">
      <Avatar name={client.userName} size={"50"} round="14px"></Avatar>
      <span className="userName">{client.username}</span>
    </div>
  );
};

export default Client;
