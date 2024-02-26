import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import data from './data';
// import CardImage1 from './images/cardImage1.png'
// import CardImage2 from './images/cardImage2.png'
// import CardImage3 from './images/cardImage3.webp'


function App() {

  //Better approach to fetch data from database and display in terms of components.

  const cardElement =data.map(element=>{
    return <Card 
    key={element.id}
    data={element}
    />
  })

  // const cardData1={
  //   imageUrl:CardImage1,
  //   status: "Sold out",
  //   rating: 4.8,
  //   quantity: 7,
  //   country: "USA",
  //   desc: "Life lessons with Katie Zaferes",
  //   price:136,
  // }
  // const cardData2={
  //   imageUrl:CardImage2,
  //   status: "online",
  //   rating: 5.0,
  //   quantity: 30,
  //   country: "Australia",
  //   desc: "Learn wedding Photography",
  //   price:125,
  // }
  // const cardData3={
  //   imageUrl:CardImage3,
  //   rating: 4.8,
  //   quantity: 2,
  //   country: "USA",
  //   desc: "Group Mountain Biking",
  //   price:50,
  // }
  
  return (
    <>
    <Navbar />
    <div className="body-container">
    <Hero />
    <div className="main-container">
{cardElement}
    </div>

    </div>
    
   
    </>
  );
}

export default App;
