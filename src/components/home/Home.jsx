import Products from './Products';
import Slider from './Slider';
import StatsBar from './StatsBar';
import ValuesSection from './Values';
import Testimony from './Testimony';
import Solutions from './Solutions';

function Home() {
  return (
    <>
      <Slider />
      <StatsBar />
      <Solutions />
      <ValuesSection />
      <Products />
      <Testimony />
    </>
  );
}

export default Home;
