import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ApiServices } from '../../services/apiServices';
import './styles.scss';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getUsers().then((res) => {
      setUsers(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">New Join Members</div>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button type="button" className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
