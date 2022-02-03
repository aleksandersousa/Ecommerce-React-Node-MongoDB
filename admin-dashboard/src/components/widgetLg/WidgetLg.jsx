import './styles.scss';
import { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { ApiServices } from '../../services/apiServices';

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getOrders().then((res) => {
      setOrders(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (orders.length !== 0) {
      const apiServices = new ApiServices();
      const tempUsers = [];
      const getUsers = async () => {
        await Promise.all(orders.map(async (order) => {
          await apiServices.getUser(order.userId).then((res) => {
            tempUsers.push(res.data);
          });
        }));
        setUsers(tempUsers);
      };
      getUsers();
    }
  }, [orders]);

  function Button({ type }) {
    return <button type="button" className={`widgetLgButton ${type}`}>{type}</button>;
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map((order, i) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <img
                  src={users[i]?.img || 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'}
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{users[i]?.username}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">${order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
