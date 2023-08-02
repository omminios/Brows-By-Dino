import Carousel from "./Componets/Carousel";
import Navbar from "./Componets/Navbar";

function App() {
  const images = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aotky6HIVL0976fHmMqYzQHaEK%26pid%3DApi&f=1&ipt=208b6c163da4581905284946eedf49109ea4f9449a331592bbc874229c5cd801&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.evg45aeavkBAJWawqxbOfQHaDy%26pid%3DApi&f=1&ipt=51ea458128b9ab0ebc03a5059bcfe09b8103eee3cab7b6d1b031802fe44cc04d&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Be1C6VAg1dK8CYeco8VSPQHaE8%26pid%3DApi&f=1&ipt=f0f7e5436eb6b74ddb614f67421e925ce6c29d9dd1ed3e563f03ccee79daf0c7&ipo=images',
  ];
  return (
    <div>
      <Navbar/>
      <div className="bg-fuchsia-950 min-h-screen">
        <Carousel images={images}/>
        <section className="py-6">work</section>
      </div>
    </div>
  );
}

export default App;
