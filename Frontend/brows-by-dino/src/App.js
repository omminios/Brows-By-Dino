import Carousel from "./Componets/Carousel";
import Navbar from "./Componets/Navbar";

function App() {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
  ];
  return (
    <div>
      <Navbar/>
      <div className="bg-purple-950 min-h-screen">
        <Carousel images={images}/>
      </div>
    </div>
  );
}

export default App;
