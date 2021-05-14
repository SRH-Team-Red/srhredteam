import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import { unsupportedProp } from "@material-ui/core";

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div style={{ width: "18vw" }}>
      {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <div className="email">{user.email}</div>
      {/* <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=Cj0KCQiAmfmABhCHARIsACwPRADZeygzXCmIKemC3OExMusmCUIbptSrG2CUWsLYPaQQhtgAmRlrDYMaAvv8EALw_wcB"
        target="_blank"
        className="link"
      >
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
      </a>

      <a
        href="https://www.who.int/emergencies/en/"
        target="_blank"
        className="link"
      >
        <SidebarRow Icon={EmojiFlagsIcon} title="Quick Help" />
      </a>
      <a href="https://covid19.who.int/" target="_blank" className="link">
        <SidebarRow Icon={FindReplaceIcon} title="Track Cases" />
      </a>
      <a
        href="https://www.youtube.com/results?search_query=covid+19+live+update"
        target="_blank"
        className="link"
      >
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      </a>
      <SidebarRow Icon={ExpandMoreOutlined} title="More" /> */}
    </div>
  );
};

export default Sidebar;
