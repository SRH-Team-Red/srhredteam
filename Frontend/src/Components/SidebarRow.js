import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h6 style={{ marginLeft: "10px" }}>{title}</h6>
    </div>
  );
}

export default SidebarRow;
