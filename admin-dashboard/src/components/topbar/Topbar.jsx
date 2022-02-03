import { Badge } from '@material-ui/core';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">admin</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Badge badgeContent={2} overlap="circular" color="primary">
              <NotificationsNone />
            </Badge>
          </div>
          <div className="topbarIconContainer">
            <Badge badgeContent={2} overlap="circular" color="primary">
              <Language />
            </Badge>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
