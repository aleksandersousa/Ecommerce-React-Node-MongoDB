import FeaturedItem from '../featuredItem/FeaturedItem';
import './styles.scss';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <FeaturedItem title="Revanue" money="2,415" moneyRate={-11.4} />
      <FeaturedItem title="Sales" money="4,415" moneyRate={-1.4} />
      <FeaturedItem title="Cost" money="2,225" moneyRate={+2.5} />
    </div>
  );
}
