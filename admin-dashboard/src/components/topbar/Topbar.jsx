import { Badge } from '@material-ui/core';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import './styles.scss';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
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
        </div>
      </div>
    </div>
  );
}
