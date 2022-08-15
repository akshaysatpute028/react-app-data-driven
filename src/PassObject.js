import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./components/CardData";

function PassObject() {
  const CardData = Data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
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

export default PassObject;