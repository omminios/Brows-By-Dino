import Carousel from "./Componets/Carousel";
import Navbar from "./Componets/Navbar";

function App() {
  const images = [
    '/Images/Image1.jpg',  // or whatever the image's extension is
    '/Images/Image2.jpg',   // assuming there was a typo in your original code
    '/Images/Image3.jpg',
    '/Images/Image4.jpg'
]

  return (
    <div>
      <Navbar/>
      <div className="bg-fuchsia-950 min-h-screen">
        <Carousel images={images}/>
        <section className="h-screen grid">Welcome To Brows By Dino</section>
      </div>
    </div>
  );
}

export default App;
