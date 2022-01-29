import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './styles.scss';

export default function FeaturedItem({ title, money, moneyRate }) {
  const isPositive = (num) => num > 0;

  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{`$${money}`}</span>
        <span className="featuredMoneyRate">
          {isPositive(moneyRate)
            ? (<>{moneyRate} <ArrowUpward className="featuredIcon" /> </>)
            : (<>{moneyRate} <ArrowDownward className="featuredIcon negative" /> </>)}
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  );
}
