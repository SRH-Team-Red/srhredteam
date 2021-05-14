import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';

const Header = () => {
  const user = useSelector(selectUser);

  // Event Handler
  const scrollElement = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://i.pinimg.com/originals/3d/a5/b2/3da5b24f7c6bf9569faa2abef03089ae.png' />
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton onClick={() => auth.signOut()}>
          <ExitToAppIcon />
          <span className='signout'>SignOut</span>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
