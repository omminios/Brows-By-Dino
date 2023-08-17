import Carousel from "./Componets/Carousel";
import MainPoint from "./Componets/MainPoint";
import Navbar from "./Componets/Navbar";
import eyelash from "./Icons/eyelash.svg";
import profile from "./Icons/profile.svg";
import time from "./Icons/time.svg";


function App() {
  const images = [
    '/Images/Image1.jpg',
    '/Images/Image2.jpg',
    '/Images/Image3.jpg',
    '/Images/Image4.jpg'
  ];
  
  const bullets = [
    {image: eyelash, alt: "Icon of eyelash", title: "Tailored To You", text: "Every service is customized to suit your unique features and preferences.", id: 1},
    {image: profile, alt: "Icon of certified professional", title: "Certified Professionals", text: "Our team is trained in the latest beauty techniques, ensuring you're in expert hands.", id: 2},
    {image: time, alt: "Icon of hourglass", title: "Durable & Time-Saving", text: "From brows to lips, our treatments give long-lasting results, reducing your daily makeup routine.", id: 3}
  ];

  return (
    <div className="bg-white">
      <Navbar/>
      <div className="">
        <Carousel images={images}/>
        <section className="min-h-screen">
          <h1 className="flex justify-center items-center text-center w-full mt-28 text-6xl font-grenze mx-auto">Welcome to Brows By Dino</h1>
        
          <div className="mx-auto max-w-screen-lg mt-16 text-2xl text-center overflow-y-auto mb-20 font-lato text-purple-500 p-4 ">
            Unveil your brow potential! At Brows by Dino, we don't just stop at eyebrows. 
            Dive into a world where microblading meets eyelash enhancements and dark lip neutralization to give you that ever-lasting, radiant glow.
          </div>

          <div className="flex">
            {bullets.map(bullet => <MainPoint key={bullet.id} content={bullet} icons={bullet.image} />)}
          </div>
        </section>
        <section className="">
    <h1 className="m-4 text-center text-6xl font-grenze">Services</h1>
    <div class="h-[50vh] w-full grid grid-cols-2 grid-rows-2 border-b-2 border-r-2">
    <div class="flex flex-col items-center justify-center border-r-2 border-b-2">
        <img src="path_to_icon_1.png" alt="Icon 1" class="h-12 w-12 mb-2" />
        <h2>Title 1</h2>
    </div>

    <div class="flex flex-col items-center justify-center border-b-2">
        <img src="path_to_icon_2.png" alt="Icon 2" class="h-12 w-12 mb-2" />
        <h2>Title 2</h2>
    </div>

    <div class="flex flex-col items-center justify-center border-r-2">
        <img src="path_to_icon_3.png" alt="Icon 3" class="h-12 w-12 mb-2" />
        <h2>Title 3</h2>
    </div>

    <div class="flex flex-col items-center justify-center">
        <img src="path_to_icon_4.png" alt="Icon 4" class="h-12 w-12 mb-2" />
        <h2>Title 4</h2>
    </div>
</div>

</section>

      </div>
    </div>
  );
}

export default App;
