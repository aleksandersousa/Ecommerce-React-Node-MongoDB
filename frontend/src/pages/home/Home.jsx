import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Categories from '../../components/categories/Categories';
import Products from '../../components/products/Products';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

export default function Home() {
  const annoucementText = 'Super Deal! Free Shipping on Orders Over $50';
  return (
    <div>
      <Announcement text={annoucementText} />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
