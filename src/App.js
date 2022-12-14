import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./components/CardData";
import Joke from './components/Joke';

function App() {
  const CardData = Data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cardHolder'>
        {CardData}
      </div>
    </div>
  );
}

export default App;